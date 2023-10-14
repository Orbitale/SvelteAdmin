<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import {
		ButtonSkeleton,
		CheckboxSkeleton,
		InlineNotification,
		TextAreaSkeleton,
		TextInputSkeleton
	} from 'carbon-components-svelte';

	import CrudForm from './CrudForm.svelte';
	import type { CrudDefinition } from './definition.ts';
	import type { CrudAction } from './actions.ts';
	import type { KeyValueObject } from '../generic_types.ts';

	export let crud: CrudDefinition;
	export let action: CrudAction;
	export let requestParameters: KeyValueObject = {};

	let defaultData = crud.options.stateProvider?.provide(action, requestParameters);

	let mounted = false;

	onMount(() => {
		if (!defaultData) {
			defaultData = crud.options.stateProvider?.provide(action, requestParameters);
		}
		mounted = true;
	});
</script>

{#if !defaultData}
	{#if mounted}
		<InlineNotification kind="error">
			{$_('error.crud.entity.not_found')}
		</InlineNotification>
	{:else}
		<TextInputSkeleton />
		<CheckboxSkeleton />
		<TextAreaSkeleton />
		<ButtonSkeleton />
	{/if}
{:else}
	<CrudForm
		crudAction={action}
		{defaultData}
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
