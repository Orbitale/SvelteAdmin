<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import ButtonSkeleton from 'carbon-components-svelte/src/Button/ButtonSkeleton.svelte';
	import CheckboxSkeleton from 'carbon-components-svelte/src/Checkbox/CheckboxSkeleton.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import TextAreaSkeleton from 'carbon-components-svelte/src/TextArea/TextAreaSkeleton.svelte';
	import TextInputSkeleton from 'carbon-components-svelte/src/TextInput/TextInputSkeleton.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import CrudForm from '$lib/themes/carbon/Crud/CrudForm.svelte';
	import type { CrudDefinition } from '$lib/Crud/definition';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { KeyValueObject } from '$lib/genericTypes';
	import type { StateProviderResult } from '$lib/State/Provider';

	export let crud: CrudDefinition<unknown>;
	export let operation: CrudOperation<unknown>;
	export let requestParameters: KeyValueObject = {};

	let defaultData: StateProviderResult<unknown> = crud.options.stateProvider.provide(
		operation,
		requestParameters
	);

	onMount(async () => {
		const data = await defaultData;
		if (!data) {
			defaultData = crud.options.stateProvider.provide(operation, requestParameters);
		}
	});

	function onSubmitData(event: CustomEvent<Record<string, unknown>>) {
		const data = event.detail;

		crud.options.stateProcessor.process(data, operation, requestParameters);
	}
</script>

{#await defaultData}
	<FormGroup><TextInputSkeleton /></FormGroup>
	<FormGroup><CheckboxSkeleton /></FormGroup>
	<FormGroup><TextAreaSkeleton /></FormGroup>
	<FormGroup><ButtonSkeleton /></FormGroup>
{:then data}
	{#if !data}
		<InlineNotification kind="error">
			{$_('error.crud.entity.not_found')}
		</InlineNotification>
	{:else}
		<CrudForm
			{operation}
			defaultData={data}
			on:click
			on:keydown
			on:mouseover
			on:mouseenter
			on:mouseleave
			on:submit
			on:submitData
			on:submitData={onSubmitData}
		>
			<svelte:fragment slot="form-header">
				<h2>{$_(operation.label, { values: { name: $_(crud.options.label.singular) } })}</h2>
			</svelte:fragment>
		</CrudForm>
	{/if}
{/await}
