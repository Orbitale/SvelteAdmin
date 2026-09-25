<script lang="ts">
	import { type Snippet, onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import DataTable, {
		type DataTableHeader,
		type DataTableKey
	} from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarBatchActions from 'carbon-components-svelte/src/DataTable/ToolbarBatchActions.svelte';

	import DataTableToolbar from '$lib/themes/svelte/carbon/DataTable/Toolbar/DataTableToolbar.svelte';
	import ToolbarAction from '$lib/themes/svelte/carbon/DataTable/Toolbar/ToolbarAction.svelte';
	import ItemActions from '$lib/themes/svelte/carbon/DataTable/actions/ItemActions.svelte';

	import type { Headers, Row, Rows } from '$lib/DataTable.js';
	import { type Action, CallbackAction } from '$lib/Actions.js';
	import type { FilterInterface, FilterOptions } from '$lib/Filter.js';
	import type { ThemeConfig } from '$lib/types.js';
	import type { SubmittedData } from '$lib/Crud/Form.js';
	import { TextField } from '$lib/Fields/Text.js';
	import type { FieldInterface, FieldOptions } from '$lib/Fields/Field.js';
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
		title?: string;
		description?: string;
		children?: Snippet;
		onFiltersSubmit?: (data: SubmittedData) => void;
		[key: string]: unknown;
	} = $props();

	let resolved = $state(false);
	let actionsCellIndex = $state(-1);
	let batchSelectionIsActive = $state(false);
	let selectedRowIds: ReadonlyArray<DataTableKey> = $state([]);
	let sortKey: DataTableKey | string | undefined = $state();
	let sortDirection: 'ascending' | 'descending' | 'none' = $state('none');
	let storedHeaders: Readonly<Headers> = $state([]);
	let currentFilters: SubmittedData = $state({});

	function getFieldFromRow(fieldName: string, row: Row): FieldInterface<FieldOptions> {
		if (!row.__crud_operation) {
			throw new Error('Internal "__crud_operation" property isn\'t properly injected.');
		}

		const matchingFields = row.__crud_operation.fields.filter(
			(f: FieldInterface<FieldOptions>) => f.name === fieldName
		);

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
		resolvedRows = [];
		sortKey = undefined;
		sortDirection = 'none';
		onFiltersSubmit(currentFilters);
	}

	function submitFilters(data: SubmittedData) {
		resolvedRows = [];
		currentFilters = data;
		onFiltersSubmit(currentFilters);
	}

	function onCancelSelection(e: CustomEvent<null>) {
		resolvedRows = [];
		e.preventDefault();
		batchSelectionIsActive = false;
	}

	// Extracted from Carbon's DataTable
	type SortEvent = {
		header: DataTableHeader;
		sortDirection?: 'none' | 'ascending' | 'descending';
	};

	function onHeaderClick(e: CustomEvent<SortEvent>) {
		if (onSort && e.detail?.sortDirection) {
			console.info('header click', e);
			resolvedRows = [];
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

	let resolvedRows: Rows = $state([]);

	$effect(() => {
		resolved = false;
		rows.then((r: Rows) => {
			resolved = true;
			resolvedRows = r;
		});
	});

	onMount(() => {
		let baseHeaders = [...headers];
		if (actions.length) {
			baseHeaders.push({
				key: '__item_actions',
				empty: true
			});
			actionsCellIndex = baseHeaders.length - 1;
		}
		storedHeaders = baseHeaders;
	});
</script>

<DataTable
	headers={storedHeaders}
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
				{#each batchActions as action (action)}
					<ToolbarAction {action} action_arguments={[selectedRowIds]} />
				{/each}
			</ToolbarBatchActions>
		</Toolbar>
	{/if}

	{#if !resolvedRows.length && resolved}
		<InlineNotification kind="warning" hideCloseButton={true} lowContrast={true}>
			{$_('error.crud.list.no_elements')}
		</InlineNotification>
	{/if}

	{@render children?.()}

	{#await rows}
		<Loading />
	{:catch error}
		<InlineNotification kind="error" hideCloseButton={true} lowContrast={true}>
			{$_('error.crud.list.load_error')}<br />
			{error.toString()}
		</InlineNotification>
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
