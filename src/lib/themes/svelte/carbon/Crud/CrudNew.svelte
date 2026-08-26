<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from './CrudForm.svelte';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { CrudDefinition } from '$lib/Crud';
	import type { DashboardDefinition } from '$lib/Dashboard';
	import type { RequestParameters } from '$lib/Request';
	import type { SubmittedData } from '$lib/Crud/Form';

	let {
		dashboard,
		operation,
		crud,
		requestParameters = {}
	}: {
		dashboard: DashboardDefinition;
		operation: CrudOperation;
		crud: CrudDefinition<unknown>;
		requestParameters?: RequestParameters;
	} = $props();

	async function onSubmitData(data: SubmittedData) {
		await crud.options.stateProcessor.process(data, operation, requestParameters);

		window.location.href = document.referrer || dashboard.getFirstActionUrl();
	}
</script>

<CrudForm
	theme={dashboard.theme}
	{operation}
	{onSubmitData}
	on:click
	on:keydown
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:submit
>
	{#snippet formHeader()}
		<h2>{$_(operation.label, { values: { name: $_(crud.options.label.singular) } })}</h2>
	{/snippet}
</CrudForm>
