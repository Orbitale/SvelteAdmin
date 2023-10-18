<script lang="ts">
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import { _ } from 'svelte-i18n';

	import DataTableToolbar from '$lib/admin/DataTable/Toolbar/DataTableToolbar.svelte';
	import ItemActions from '$lib/admin/DataTable/actions/ItemActions.svelte';
	import type { Headers, Rows } from '$lib/admin/DataTable/DataTable.ts';
	import type { Action } from '$lib/admin/actions';
	import { DataTableSkeleton } from 'carbon-components-svelte';

	export let headers: Headers = [];
	export let rows: Promise<Rows>;
	export let actions: Action[] = [];
	export let globalActions: Array<Action> = [];

	let resolvedRows: Rows = [];
	rows.then(r => resolvedRows = r);

	let actionsCellIndex = -1;

	if (actions.length) {
		headers.push({
			key: '__item_actions',
			empty: true
		});
		actionsCellIndex = headers.length - 1;
	}
</script>

{#await rows}
	<DataTableSkeleton {headers} size="short" zebra={true} {...$$restProps} />
{:then}
	<DataTable {headers} rows={resolvedRows} size="short" zebra={true} {...$$restProps}>
		<svelte:fragment slot="title">
			<slot name="title" />
		</svelte:fragment>
		<svelte:fragment slot="description">
			<slot name="description" />
		</svelte:fragment>
		{#if globalActions.length}
			<DataTableToolbar actions={globalActions} />
		{/if}
		{#if !resolvedRows.length}
			<InlineNotification kind="warning" hideCloseButton={true} lowContrast={true}>
				{$_('error.crud.list.no_elements')}
			</InlineNotification>
		{/if}
		<div slot="cell" let:cell let:row let:cellIndex>
			{#if cellIndex === actionsCellIndex}
				<ItemActions {actions} item={row} />
			{:else}
				{cell.display ? cell.display(cell.value) : cell.value}
			{/if}
		</div>
	</DataTable>
{/await}
