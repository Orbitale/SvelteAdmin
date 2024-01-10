<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import DataTableSkeleton from 'carbon-components-svelte/src/DataTable/DataTableSkeleton.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';

	import DataTableToolbar from '$lib/themes/carbon/DataTable/Toolbar/DataTableToolbar.svelte';
	import ItemActions from '$lib/themes/carbon/DataTable/actions/ItemActions.svelte';
	import type { Headers, Row, Rows } from '$lib/DataTable/DataTable';
	import type { Action } from '$lib/actions';
	import type { Filter, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';
	import { type SubmittedData } from '$lib/Crud/form';

	export let headers: Headers = [];
	export let rows: Promise<Rows>;
	export let actions: Action[] = [];
	export let globalActions: Array<Action> = [];
	export let filters: Array<Filter<FilterOptions>> = [];
	export let page: number | undefined;
	export let theme: ThemeConfig;

	let resolvedRows: Rows = [];

	let actionsCellIndex = -1;

	$: rows.then((r) => (resolvedRows = r));

	if (actions.length) {
		headers.push({
			key: '__item_actions',
			empty: true
		});
		actionsCellIndex = headers.length - 1;
	}

	function getFieldFromRow(fieldName: string, row: Row) {
		if (!row.__operation) {
			console.warn('Internal "__operation" field isn\'t properly injected');
			return theme.viewFields.default;
		}

		const matchingFields = row.__operation.fields.filter((f) => f.name === fieldName);

		if (!matchingFields.length) {
			console.warn(`Field "${fieldName}" was not found in current operation.`);
			return theme.viewFields.default;
		}

		if (matchingFields.length > 1) {
			console.warn(
				`Field "${fieldName}" was found more than once in current operation, using the first one as reference.`
			);
		}

		return matchingFields[0];
	}

	function getViewFieldComponent(fieldName: string, row: Row) {
		const field = getFieldFromRow(fieldName, row);

		if (!field) {
			return theme.viewFields.default;
		}

		return theme.viewFields[field.viewComponent] ?? theme.viewFields.default;
	}

	const dispatchEvent = createEventDispatcher<SubmittedData>();

	function onFiltersSubmit(event: CustomEvent<SubmittedData>) {
		dispatchEvent('submitFilters', event.detail);
	}
</script>

{#if !resolvedRows || !resolvedRows.length}
	<DataTableSkeleton {headers} size="short" zebra={true} {...$$restProps} />
{:else}
	<DataTable
		{headers}
		{page}
		zebra
		expandable
		rows={resolvedRows}
		size="short"
		{...$$restProps}
	>
		<svelte:fragment slot="title">
			<slot name="title" />
		</svelte:fragment>
		<svelte:fragment slot="description">
			<slot name="description" />
		</svelte:fragment>
		{#if globalActions.length || filters.length}
			<DataTableToolbar
				{theme}
				actions={globalActions || []}
				filters={filters || []}
				on:submitFilters={onFiltersSubmit}
			/>
		{/if}
		{#if !resolvedRows.length}
			<InlineNotification kind="warning" hideCloseButton={true} lowContrast={true}>
				{$_('error.crud.list.no_elements')}
			</InlineNotification>
		{/if}
		{#if $$slots.default}
			<slot />
		{/if}
		{#await rows}
			<Loading />
		{/await}
		<div slot="cell" let:cell let:row let:cellIndex>
			{#if cellIndex === actionsCellIndex}
				<ItemActions {actions} item={row} />
			{:else}
				<svelte:component
					this={getViewFieldComponent(cell.key, row)}
					field={getFieldFromRow(cell.key, row)}
					value={cell.display ? cell.display(cell.value) : cell.value}
					operation={$$restProps.operation}
					{theme}
				>
					{cell.display ? cell.display(cell.value) : cell.value}
				</svelte:component>
			{/if}
		</div>
	</DataTable>
{/if}
