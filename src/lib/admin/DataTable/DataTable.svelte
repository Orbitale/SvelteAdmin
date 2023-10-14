<script lang="ts">
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import { _ } from 'svelte-i18n';

	import ItemActions from './actions/ItemActions.svelte';
	import type { Action } from '../actions';
	import type { Headers, Rows } from './DataTable.ts';

	export let headers: Headers = [];
	export let rows: Rows = [];
	export let actions: Action[] = [];

	let actionsCellIndex = -1;

	if (actions.length) {
		headers.push({
			key: '__item_actions',
			empty: true
		});
		actionsCellIndex = headers.length - 1;
	}
</script>

<DataTable {headers} {rows} zebra={true} {...$$restProps}>
	{#if !rows.length}
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
