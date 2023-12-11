<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Pagination from "carbon-components-svelte/src/Pagination/Pagination.svelte";

	import { type Headers, type Header, createEmptyRow } from '$lib/DataTable/DataTable';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import type { RequestParameters } from '$lib/genericTypes';
	import type { Field } from '$lib/FieldDefinitions/Field';
	import type { CrudDefinition } from '$lib/Crud/definition';

	import { List } from '$lib/Crud/Operations';

	import type { Action } from '$lib/actions';

	import type { DashboardDefinition } from '$lib';
	import theme from '$lib/stores/theme';
	import type {StateProviderResult} from "$lib/State/Provider";
	import {PaginatedResults} from "$lib/DataTable/Pagination";

	export let dashboard: DashboardDefinition<unknown>;
	export let operation: typeof List;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

	if (!operation instanceof List) {
		throw new Error('CrudList view can only accept operations that are instances of the List operation.');
	}

	let page: number|undefined;
	let providerResponse: StateProviderResult<unknown> = null;

	const DataTable = $theme.dataTable;

	const actions = operation.actions;
	const headers: Headers = operation.fields.map((field: Field<Options>): Header => {
		return { key: field.name, value: field.label };
	});

	if (!crud.options.stateProvider) {
		throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
	}

	function getResults() {
		providerResponse = null;
		providerResponse = crud.options.stateProvider.provide(operation, requestParameters);

		return providerResponse.then((responseResults) => {
			if (responseResults && !Array.isArray(responseResults) && !(responseResults instanceof PaginatedResults)) {
				throw new Error(
					'CrudList expected state provider to return an array, current result is non-empty and not an array.'
				);
			}
			let results = responseResults instanceof PaginatedResults ? responseResults.currentItems : responseResults;
			if (!results || !results?.length) {
				results = [createEmptyRow(operation)];
			}

			// Make sure final results always have the "id" field,
			// which is mandatory for Carbon's DataTable.
			results = results.map((result: objet) => {
				if (!result.id && crud.options.identifierFieldName !== 'id') {
					result.id = result[crud.options.identifierFieldName];
				}

				return result;
			});

			resolvedResults = responseResults;

			return results;
		});
	}

	let showPagination = operation.options.pagination.enabled;
	let rows: Promise<unknown> = getResults();
	let resolvedResults: PaginatedResults<unknown>|Array<unknown>;
	let globalActions: Array<Action> = [];

	if (operation instanceof List<unknown> || operation.options?.globalActions?.length) {
		globalActions = operation.options.globalActions;
	}

	async function onPaginationUpdate(event: CustomEvent<{page: number, pageSize: number}>) {
		page = event.detail.page;
		requestParameters.page = event.detail.page;
		rows = getResults();
	}

	onMount(async () => {
		const data = await rows;
		if (!data) {
			rows = getResults();
		}
	});
</script>

<DataTable {headers} {rows} {actions} {globalActions} page={page}>
	<h2 slot="title">
		{$_(operation.label, { values: { name: $_(crud.options.label.plural) } })}
	</h2>
</DataTable>
{#if showPagination && resolvedResults instanceof PaginatedResults}
	<Pagination
		pageSize={operation.options.pagination?.itemsPerPage}
		page={resolvedResults?.currentPage}
		totalItems={resolvedResults?.numberOfItems}
		pageSizeInputDisabled={true}
		on:update={onPaginationUpdate}
	/>
{/if}
