<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Button, Column, Link, ToastNotification } from 'carbon-components-svelte';
	import { type Action, CallbackAction, UrlAction } from '../../actions';

	export let action: Action;
	export let item: any = undefined;
</script>

<Column>
	{#if action instanceof UrlAction}
		<Link href={action.url(item)} icon={action.icon}>
			{$_(action.label)}
		</Link>
	{:else if action instanceof CallbackAction}
		<Button on:click={async () => await action.call(item)} icon={action.icon}>
			{$_(action.label)}
		</Button>
	{:else}
		<ToastNotification
			title={$_('data_table.items.unsupported_action', { values: { action: action.label } })}
			hideCloseButton
		/>
	{/if}
</Column>
