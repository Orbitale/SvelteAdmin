<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import ButtonSkeleton from 'carbon-components-svelte/src/Button/ButtonSkeleton.svelte';
	import CheckboxSkeleton from 'carbon-components-svelte/src/Checkbox/CheckboxSkeleton.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import TextAreaSkeleton from 'carbon-components-svelte/src/TextArea/TextAreaSkeleton.svelte';
	import TextInputSkeleton from 'carbon-components-svelte/src/TextInput/TextInputSkeleton.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import type { CrudDefinition } from '$lib/Crud/definition';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { DashboardDefinition } from '$lib/Dashboard/definition';
	import type { StateProviderResult } from '$lib/State/Provider';
	import type { RequestParameters } from '$lib/request';

	export let dashboard: DashboardDefinition<unknown>;
	export let operation: CrudOperation;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

	const CrudForm = dashboard.adminConfig.theme.form;

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

	async function onSubmitData(event: CustomEvent<Record<string, unknown>>) {
		const data = event.detail;

		await crud.options.stateProcessor.process(data, operation, requestParameters);

		window.location.href = (document.referrer || dashboard.getFirstActionUrl());
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
