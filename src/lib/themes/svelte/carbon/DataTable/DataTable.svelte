<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import DataTable, {
		type DataTableHeader,
		type DataTableRowId
	} from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import DataTableSkeleton from 'carbon-components-svelte/src/DataTable/DataTableSkeleton.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarBatchActions from 'carbon-components-svelte/src/DataTable/ToolbarBatchActions.svelte';

	import DataTableToolbar from '$lib/themes/svelte/carbon/DataTable/Toolbar/DataTableToolbar.svelte';
	import ToolbarAction from '$lib/themes/svelte/carbon/DataTable/Toolbar/ToolbarAction.svelte';
	import ItemActions from '$lib/themes/svelte/carbon/DataTable/actions/ItemActions.svelte';

	import type { Headers, Row, Rows } from '$lib/DataTable';
	import { type Action, CallbackAction } from '$lib/Actions';
	import type { FilterInterface, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/types';
	import type { SubmittedData } from '$lib/Crud/Form';
	import { type FieldInterface, type FieldOptions, TextField } from '$lib';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';

	export let headers: Headers = [];
	export let rows: Promise<Rows>;
	export let actions: Action[] = [];
	export let globalActions: Array<Action> = [];
	export let batchActions: Action[] = [];
	export let filters: Array<FilterInterface<FilterOptions>> = [];
	export let filtersValues: {[key: string]: string|Array<string>|undefined} = {};
	export let page: number | undefined;
	export let theme: ThemeConfig;
	export let sortable: boolean;
	export let onSort: (event: CustomEvent<SortEvent>) => void;

	let actionsCellIndex = -1;
	let batchSelectionIsActive = false;
	let selectedRowIds: ReadonlyArray<DataTableRowId> = [];
	let sortKey: string | undefined = undefined;
	let sortDirection: 'ascending' | 'descending' | 'none' = 'none';
	let currentFilters: SubmittedData = {};

	if (actions.length) {
		headers.push({
			key: '__item_actions',
			empty: true
		});
		actionsCellIndex = headers.length - 1;
	}

	function getFieldFromRow(fieldName: string, row: Row): FieldInterface<FieldOptions> {
		if (!row.__crud_operation) {
			throw new Error('Internal "__crud_operation" property isn\'t properly injected.');
		}

		const matchingFields = row.__crud_operation.fields.filter((f) => f.name === fieldName);

		if (!matchingFields.length) {
			console.warn(`Field "${fieldName}" was not found in current operation.`);
			return new TextField(fieldName, fieldName);
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

	function resetSorting() {
		sortKey = undefined;
		sortDirection = 'none';
		dispatchEvent('submitFilters', currentFilters);
	}

	const dispatchEvent = createEventDispatcher<{ submitFilters: SubmittedData }>();

	function onFiltersSubmit(event: CustomEvent<SubmittedData>) {
		currentFilters = event.detail;
		dispatchEvent('submitFilters', currentFilters);
	}

	function onCancelSelection(event: CustomEvent<null>) {
		event.preventDefault();
		batchSelectionIsActive = false;
	}

	// Extracted from Carbon's DataTable
	type SortEvent = {
		header: DataTableHeader;
		sortDirection?: 'none' | 'ascending' | 'descending';
	};

	function onHeaderClick(event: CustomEvent<SortEvent>) {
		if (onSort) {
			onSort(event);
		}
	}

	const resetSortingAction = new CallbackAction(
		'data_table.reset_sorting',
		TrashCan,
		resetSorting,
		{
			buttonKind: 'secondary'
		}
	);

	$: globalActionsDisplay = [
		...globalActions,
		...(sortKey && sortDirection !== 'none' ? [resetSortingAction] : [])
	];
</script>

{#await rows}
	<DataTableSkeleton {headers} size="short" zebra={true} {...$$restProps} />
{:then resolvedRows}
	<DataTable
		{headers}
		{page}
		{sortable}
		bind:sortKey
		bind:sortDirection
		zebra
		selectable={batchActions.length > 0}
		batchSelection={batchSelectionIsActive}
		rows={resolvedRows}
		size="short"
		on:click:header={onHeaderClick}
		bind:selectedRowIds
		{...$$restProps}
	>
		<svelte:fragment slot="title">
			<slot name="title" />
		</svelte:fragment>
		<svelte:fragment slot="description">
			<slot name="description" />
		</svelte:fragment>
		{#if globalActionsDisplay.length || filters.length}
			<DataTableToolbar
				{theme}
				actions={globalActionsDisplay || []}
				filters={filters || []}
				filtersValues={filtersValues || {}}
				on:submitFilters={onFiltersSubmit}
			/>
		{/if}
		{#if batchActions.length > 0}
			<Toolbar>
				<ToolbarBatchActions bind:active={batchSelectionIsActive} on:cancel={onCancelSelection}>
					{#each batchActions as action}
						<ToolbarAction {action} action_arguments={[selectedRowIds]} />
					{/each}
				</ToolbarBatchActions>
				<!--<ToolbarContent>-->
				<!--	<Button on:click={() => (active = true)}>Edit rows</Button>-->
				<!--</ToolbarContent>-->
			</Toolbar>
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
					value={cell.display ? cell.display(cell.value, row) : cell.value}
					operation={$$restProps.operation}
					entityObject={row}
					{theme}
				>
					{cell.display ? cell.display(cell.value, row) : cell.value}
				</svelte:component>
			{/if}
		</div>
	</DataTable>
{:catch error}
	<DataTable {headers} {page} zebra rows={[]} size="short" {...$$restProps}>
		<svelte:fragment slot="title">
			<slot name="title" />
		</svelte:fragment>
		<svelte:fragment slot="description">
			<slot name="description" />
		</svelte:fragment>

		<InlineNotification kind="error" hideCloseButton={true} lowContrast={true}>
			{$_('error.crud.list.load_error')}<br />
			{error.toString()}
		</InlineNotification>
	</DataTable>
{/await}
