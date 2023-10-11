<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { page } from '$app/stores';

	import CrudForm from './CrudForm.svelte';
	import type { CrudDefinition } from './definition.ts';
	import type { CrudAction } from './actions.ts';
	import { InlineNotification } from 'carbon-components-svelte';

	export let crud: CrudDefinition;
	export let action: CrudAction;

	const id: string = $page.params.id || $page.url.searchParams.id;
	const defaultData = crud.options.stateProvider?.provide(action, {
		id: id,
		...$page.url.searchParams
	});
</script>

{#if !defaultData}
	<InlineNotification kind='error'>
		{$_('error.crud.entity.not_found')}
	</InlineNotification>
{:else}
		<CrudForm
		fields={action.fields}
		crudAction={action}
		{defaultData}
		action="edit"
		on:click
		on:keydown
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:submit
		on:submitData
	>
		<svelte:fragment slot="form-header">
			<h1>{$_('crud.header.edit')}</h1>
		</svelte:fragment>
	</CrudForm>
{/if}
