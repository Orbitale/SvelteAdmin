<script lang="ts">
	import ItemFieldValue from './ItemFieldValue.svelte';
	import type Field from "../Field/Field.js";
	import type Action from "../Action/Action.js";
	import UrlAction from "../Action/UrlAction.js";
	import CallbackAction from "../Action/CallbackAction.js";

	export let item: object;
	export let fields: Array<Field>;
	export let actions: Action[] = [];
</script>

<tr class="paginated-table-item-line">
	{#each fields as field}
		<td class={field.field_html_properties.html_class}>
			<ItemFieldValue {item} {field} />
		</td>
	{/each}
	{#if actions.length}
		<td class="item-actions">
			{#each actions as action}
				{#if action instanceof UrlAction}
					<a href={action.url(item)}>
						{action.name}
					</a>
				{:else if action instanceof CallbackAction}
					<button on:click={() => action.call(item)}>
						{action.name}
					</button>
				{:else}
					<span>Unsupported action</span>
				{/if}
			{/each}
		</td>
	{/if}
</tr>

<style lang="scss">
	td {
		vertical-align: middle;
	}
	.item-actions {
		text-align: center;
	}
</style>
