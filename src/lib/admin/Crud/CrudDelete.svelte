<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Button, InlineNotification } from 'carbon-components-svelte';

	import type { CrudDefinition } from './definition.ts';
	import { type CrudAction, DeleteAction } from './actions.ts';
	import { CallbackAction, UrlAction } from '../actions.ts';
	import type { KeyValueObject } from '../generic_types.ts';

	export let crud: CrudDefinition;
	export let action: CrudAction;
	export let requestParameters: KeyValueObject = {};

	const data = crud.options.stateProvider?.provide(action, requestParameters);

	function clickCancel() {
		// TODO: check if it's the best method
		window.history.back();
	}

	function clickDelete() {
		crud.options.stateProcessor?.process(data, action, requestParameters);

		if (action instanceof DeleteAction) {
			const redirect = action.redirectTo;
			if (redirect instanceof UrlAction) {
				window.location.replace(redirect.url(data));
			} else if (redirect instanceof CallbackAction) {
				redirect.call(data);
			} else {
				console.error(`Unsupported action "${redirect.label}" for item deletion.`);
			}
		}
	}
</script>

{#if !data}
	<InlineNotification kind="error" hideCloseButton={true}>
		{$_('error.crud.entity.not_found')}
	</InlineNotification>
{:else}
	<InlineNotification kind="warning" hideCloseButton={true}>
		{$_('crud.delete.are_you_sure', {
			values: {
				id,
				name: $_(crud.options.label.singular)
			}
		})}
	</InlineNotification>
	<Button kind="danger" on:click={clickDelete}>
		{$_('crud.delete.yes_delete')}
	</Button>
	<Button kind="tertiary" on:click={clickCancel}>
		{$_('crud.delete.cancel')}
	</Button>
{/if}
