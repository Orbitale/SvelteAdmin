<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

	import type { CrudDefinition } from '$lib/Crud/definition';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import { type CrudOperation, Delete } from '$lib/Crud/Operations';
	import type { RequestParameters } from '$lib/request';

	export let operation: CrudOperation;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

	const data = crud.options.stateProvider.provide(operation, requestParameters);

	function clickCancel() {
		// TODO: check if it's the best method
		window.history.back();
	}

	async function clickDelete() {
		await crud.options.stateProcessor.process(data, operation, requestParameters);

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
				id: requestParameters[crud.options.identifierFieldName] || '',
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
