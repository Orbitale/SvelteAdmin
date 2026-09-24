<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';

	import type { Header, Headers } from '$lib/DataTable.js';
	import type { BaseField, FieldOptions } from '$lib/Fields/index.js';
	import type { CrudDefinition } from '$lib/Crud/index.js';

	import { type CrudOperation, List } from '$lib/Crud/Operations.js';

	import type { Action } from '$lib/Actions.js';

	import type { DashboardDefinition } from '$lib/Dashboard.js';
	import type { StateProviderResult } from '$lib/StateProvider.js';
	import { PaginatedResults } from '$lib/Pagination.js';
	import type { SubmittedData } from '$lib/Crud/Form.js';
	import type { RequestParameters } from '$lib/Request.js';
	import type { DataTableNonEmptyHeader } from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

	let {
		dashboard,
		operation,
		crud,
		requestParameters = $bindable({})
	}: {
		dashboard: DashboardDefinition;
		operation: List;
		crud: CrudDefinition<unknown>;
		requestParameters?: RequestParameters;
	} = $props();

	let page: number | undefined = $state();

	const configuredFilters = $derived(operation.options?.filters || []);
	const actions = $derived(operation.contextActions);
	const sortableDataTable = $derived(operation.fields.filter((field: BaseField<FieldOptions>) => !field.options?.sortable).length > 0);
	const headers: Headers = $derived(
		operation.fields.map((field: BaseField<FieldOptions>): Header => {
			return {
				key: field.name,
				value: field.label,
				// Carbon needs the "sort" property to be a callback, else it does not display the sorting.
				sort: field.options?.sortable ? () => {} : false
			};
		})
	);

	const DataTableComponent = $derived(dashboard.theme.dataTable);

	let showPagination = $derived(operation.options.pagination?.enabled);
	let rows: Promise<any> = $state(Promise.resolve(undefined));
	let paginator: PaginatedResults<any> | undefined = $state();
	let globalActions: Array<Action> = $derived(operation.options.globalActions || []);
	let batchActions: Array<Action> = $derived(operation.options.batchActions || []);

	$effect(() => {
		if (!crud.options.stateProvider) {
			throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
		}
		if (!(operation instanceof List)) {
			throw new Error(
				'CrudList view can only accept operations that are instances of the List operation.'
			);
		}
	});

	// Extracted from Carbon's DataTable
	type SortEvent = {
		header: DataTableNonEmptyHeader;
		sortDirection?: 'none' | 'ascending' | 'descending';
	};

	fetchResultsFromProvider();

	function fetchResultsFromProvider() {
		let providerResponse: StateProviderResult<any> = crud.options.stateProvider.provide(
			operation,
			requestParameters
		);

		if (crud.options.minStateLoadingTimeMs && typeof window !== 'undefined') {
			providerResponse = Promise.all([
				providerResponse,
				new Promise((resolve) => setTimeout(resolve, crud.options.minStateLoadingTimeMs))
			]).then((results) => results[0]);
		}

		type Item = {
			id?: null | string | number;
			__crud_operation?: CrudOperation;
			[key: string]: any;
		};

		rows = providerResponse.then((responseResults): Item[] => {
			if (
				responseResults &&
				!Array.isArray(responseResults) &&
				!(responseResults instanceof PaginatedResults)
			) {
				throw new Error(
					'CrudList expected state provider to return an array, current result is non-empty and not an array.'
				);
			}

			let finalRows: Array<Item> = (
				responseResults instanceof PaginatedResults ? responseResults.currentItems : responseResults
			) as Array<Item>;

			paginator = responseResults instanceof PaginatedResults ? responseResults : undefined;

			if (!finalRows || !finalRows?.length) {
				finalRows = [];
			}

			// Make sure final results always have the "id" field,
			// which is mandatory for Carbon's DataTable.
			finalRows = finalRows.map((result: Item) => {
				if (!result.id && crud.options.identifierFieldName !== 'id') {
					result.id = String(result[crud.options.identifierFieldName] || '');
				}

				result.__crud_operation = operation;

				return result;
			});

			return finalRows;
		});
	}

	function onPaginationUpdate(event: CustomEvent<{ page: number; pageSize: number }>) {
		page = event.detail.page;
		requestParameters.page = event.detail.page;
		fetchResultsFromProvider();
	}

	function onFiltersSubmit(data: SubmittedData) {
		requestParameters.filters = data;
		fetchResultsFromProvider();
	}

	async function onSort(event: CustomEvent<SortEvent>) {
		const { header, sortDirection } = event.detail;
		if (sortDirection === undefined || !header.sort) {
			// Non-sortable field
			return;
		}
		requestParameters.sort ??= {};
		if (sortDirection === 'none') {
			delete requestParameters.sort[header.key];
		} else if (sortDirection === 'ascending') {
			requestParameters.sort[header.key] = 'ASC';
		} else if (sortDirection === 'descending') {
			requestParameters.sort[header.key] = 'DESC';
		}
		fetchResultsFromProvider();
	}

	onMount(async () => {
		const data = await rows;
		if (!data) {
			fetchResultsFromProvider();
		}
	});
</script>

<DataTableComponent
	{headers}
	{rows}
	{actions}
	{globalActions}
	{batchActions}
	{page}
	{operation}
	{onSort}
	{onFiltersSubmit}
	title={$_(operation.label, { values: { name: $_(crud.options.label.plural) } })}
	sortable={sortableDataTable}
	filters={configuredFilters}
	filtersValues={requestParameters.filters}
	theme={dashboard.theme}
>
</DataTableComponent>

{#if showPagination && paginator}
	<Pagination
		pageSize={operation.options.pagination?.itemsPerPage}
		page={paginator.currentPage}
		totalItems={paginator.numberOfItems}
		pageSizeInputDisabled={true}
		on:update={onPaginationUpdate}
	/>
{/if}
