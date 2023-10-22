<script lang="ts">
	import { _ } from 'svelte-i18n';

	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ToastNotification from 'carbon-components-svelte/src/Notification/ToastNotification.svelte';

	import { type Action, CallbackAction, UrlAction } from '$lib/actions.ts';

	export let action: Action;
</script>

{#if action instanceof UrlAction}
	<Button href={action.url()} icon={action.icon}>
		{$_(action.label)}
	</Button>
{:else if action instanceof CallbackAction}
	<Button on:click={async () => await action.call()} icon={action.icon}>
		{$_(action.label)}
	</Button>
{:else}
	<ToastNotification
		title={$_('data_table.items.unsupported_action', { values: { action: action.label } })}
		hideCloseButton
	/>
{/if}
