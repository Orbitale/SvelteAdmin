<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

	import type { CrudDefinition } from '$lib/admin/Crud/definition.js';
	import { CallbackAction, UrlAction } from '$lib/admin/actions.js';
	import { type CrudOperation, Delete } from '$lib/admin/Crud/Operations.js';
	import type { KeyValueObject } from '$lib/admin/genericTypes.js';

	export let crud: CrudDefinition<object>;
	export let operation: CrudOperation<object>;
	export let requestParameters: KeyValueObject = {};

	const data = crud.options.stateProvider.provide(operation, requestParameters);

	function clickCancel() {
		// TODO: check if it's the best method
		window.history.back();
	}

	function clickDelete() {
		crud.options.stateProcessor.process(data, operation, requestParameters);

		if (operation instanceof Delete) {
			const redirect = operation.redirectTo;
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
				id: requestParameters.id || '',
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
