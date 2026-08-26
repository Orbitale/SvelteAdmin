<script lang="ts">
	import { type Snippet } from 'svelte';
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

	let {
		headers = [],
		rows,
		actions = [],
		globalActions = [],
		batchActions = [],
		filters = [],
		filtersValues = {},
		page,
		theme,
		sortable,
		onSort,
		title,
		description,
		children,
		onFiltersSubmit = () => {},
		...rest
	}: {
		headers?: Headers;
		rows: Promise<Rows>;
		actions?: Action[];
		globalActions?: Array<Action>;
		batchActions?: Action[];
		filters?: Array<FilterInterface<FilterOptions>>;
		filtersValues?: { [key: string]: string | Array<string> | undefined };
		page: number | undefined;
		theme: ThemeConfig;
		sortable: boolean;
		onSort: (event: CustomEvent<SortEvent>) => void;
		title?: Snippet;
		description?: Snippet;
		children?: Snippet;
		onFiltersSubmit?: (data: SubmittedData) => void;
		[key: string]: unknown;
	} = $props();

	let actionsCellIndex = $state(-1);
	let batchSelectionIsActive = $state(false);
	let selectedRowIds: ReadonlyArray<DataTableRowId> = $state([]);
	let sortKey: string | undefined = $state();
	let sortDirection: 'ascending' | 'descending' | 'none' = $state('none');
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
		onFiltersSubmit(currentFilters);
	}

	function submitFilters(data: SubmittedData) {
		currentFilters = data;
		onFiltersSubmit(currentFilters);
	}

	function onCancelSelection(e: CustomEvent<null>) {
		e.preventDefault();
		batchSelectionIsActive = false;
	}

	// Extracted from Carbon's DataTable
	type SortEvent = {
		header: DataTableHeader;
		sortDirection?: 'none' | 'ascending' | 'descending';
	};

	function onHeaderClick(e: CustomEvent<SortEvent>) {
		if (onSort) {
			onSort(e);
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

	let globalActionsDisplay = $derived([
		...globalActions,
		...(sortKey && sortDirection !== 'none' ? [resetSortingAction] : [])
	]);
</script>

{#await rows}
	<DataTableSkeleton {headers} size="short" zebra={true} {...rest} />
{:then resolvedRows}
	<DataTable
		{headers}
		{page}
		{sortable}
		{title}
		{description}
		bind:sortKey
		bind:sortDirection
		zebra
		selectable={batchActions.length > 0}
		batchSelection={batchSelectionIsActive}
		rows={resolvedRows}
		size="short"
		on:click:header={onHeaderClick}
		bind:selectedRowIds
		{...rest}
	>
		{#if globalActionsDisplay.length || filters.length}
			<DataTableToolbar
				{theme}
				actions={globalActionsDisplay || []}
				filters={filters || []}
				filtersValues={filtersValues || {}}
				onFiltersSubmit={submitFilters}
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

		{@render children?.()}

		{#await rows}
			<Loading />
		{/await}

		{#snippet cell({ cell, row, cellIndex })}
				<div>
				{#if cellIndex === actionsCellIndex}
					<ItemActions {actions} item={row} />
				{:else}
					{@const ViewFieldComponent = getViewFieldComponent(cell.key, row)}
					<ViewFieldComponent
						field={getFieldFromRow(cell.key, row)}
						value={cell.display ? cell.display(cell.value, row) : cell.value}
						operation={rest.operation}
						entityObject={row}
						{theme}
					>
						{cell.display ? cell.display(cell.value, row) : cell.value}
					</ViewFieldComponent>
				{/if}
			</div>
			{/snippet}
	</DataTable>
{:catch error}
	<DataTable
		{headers}
		{page}
		{title}
		{description}
		zebra
		rows={[]}
		size="short"
		{...rest}
	>
		<InlineNotification kind="error" hideCloseButton={true} lowContrast={true}>
			{$_('error.crud.list.load_error')}<br />
			{error.toString()}
		</InlineNotification>
	</DataTable>
{/await}
