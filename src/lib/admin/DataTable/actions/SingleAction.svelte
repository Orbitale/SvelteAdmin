<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import ToastNotification from 'carbon-components-svelte/src/Notification/ToastNotification.svelte';
	import { type Action, CallbackAction, UrlAction } from '../../actions';

	export let action: Action;
	export let item: object | undefined = undefined;

	function clickLink() {
		console.info('CLICK args', arguments);
	}
</script>

<Column>
	{#if action instanceof UrlAction}
		<Link href={action.url(item)} icon={action.icon} on:click={clickLink}>
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
