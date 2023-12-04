<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Pagination from "carbon-components-svelte/src/Pagination/Pagination.svelte";

	import { type Headers, type Header, createEmptyRow } from '$lib/DataTable/DataTable';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import type { RequestParameters } from '$lib/genericTypes';
	import type { Field } from '$lib/FieldDefinitions/Field';
	import type { CrudDefinition } from '$lib/Crud/definition';

	import { type CrudOperation, List } from '$lib/Crud/Operations';

	import type { Action } from '$lib/actions';

	import type { DashboardDefinition } from '$lib';
	import theme from '$lib/stores/theme';
	import type {StateProviderResult} from "$lib/State/Provider.ts";
	import {PaginatedResults} from "$lib/DataTable/Pagination.ts";

	export let dashboard: DashboardDefinition<unknown>;
	export let operation: CrudOperation;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

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
		console.info('Processing results');
		providerResponse = null;
		providerResponse = crud.options.stateProvider.provide(operation, requestParameters);

		return providerResponse.then((results) => {
			console.info('Thenning results');
			if (results && !Array.isArray(results) && !(results instanceof PaginatedResults)) {
				throw new Error(
					'CrudList expected state provider to return an array, current result is non-empty and not an array.'
				);
			}
			results = results instanceof PaginatedResults ? results.currentItems : results;
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

			return results;
		});
	}

	let rows: Promise<unknown> = getResults();
	let globalActions: Array<Action> = [];

	if (operation instanceof List<unknown> || operation.options?.globalActions?.length) {
		globalActions = operation.options.globalActions;
	}

	async function updatePagination(event: CustomEvent<{page: number, pageSize: number}>) {
		console.info('update pagination');
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
{#await providerResponse}
{:then resolvedResults}
	{#if resolvedResults instanceof PaginatedResults}
		<Pagination
			pageSize={operation.options.pagination.itemsPerPage}
			page={resolvedResults.currentPage}
			totalItems={resolvedResults.numberOfItems}
			pageSizeInputDisabled
			on:update={updatePagination}
		/>
	{/if}
{/await}
