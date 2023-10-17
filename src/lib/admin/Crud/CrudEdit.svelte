<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import ButtonSkeleton from 'carbon-components-svelte/src/Button/ButtonSkeleton.svelte';
	import CheckboxSkeleton from 'carbon-components-svelte/src/Checkbox/CheckboxSkeleton.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import TextAreaSkeleton from 'carbon-components-svelte/src/TextArea/TextAreaSkeleton.svelte';
	import TextInputSkeleton from 'carbon-components-svelte/src/TextInput/TextInputSkeleton.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import CrudForm from '$lib/admin/Crud/CrudForm.svelte';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
	import type { KeyValueObject } from '$lib/admin/genericTypes.ts';
	import DataTable from '../DataTable/DataTable.svelte';

	export let crud: CrudDefinition<object>;
	export let operation: CrudOperation<object>;
	export let requestParameters: KeyValueObject = {};

	let defaultData = crud.options.stateProvider.provide(operation, requestParameters);

	let mounted = false;

	onMount(() => {
		if (!defaultData) {
			defaultData = crud.options.stateProvider.provide(operation, requestParameters);
		}
		mounted = true;
	});
</script>

<h2 slot="title">
	{$_(operation.label, { values: { name: $_(crud.options.label.plural) } })}
</h2>

{#if !defaultData}
	{#if mounted}
		<InlineNotification kind="error">
			{$_('error.crud.entity.not_found')}
		</InlineNotification>
	{:else}
		<FormGroup><TextInputSkeleton /></FormGroup>
		<FormGroup><CheckboxSkeleton /></FormGroup>
		<FormGroup><TextAreaSkeleton /></FormGroup>
		<FormGroup><ButtonSkeleton /></FormGroup>
	{/if}
{:else}
	<CrudForm
		{operation}
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
