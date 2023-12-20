<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from './CrudForm.svelte';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { CrudDefinition } from '$lib/Crud/definition';
	import type { DashboardDefinition } from '$lib/Dashboard/definition';
	import type { RequestParameters } from '$lib/request';

	export let dashboard: DashboardDefinition<unknown>;
	export let operation: CrudOperation;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

	async function onSubmitData(event: CustomEvent<Record<string, unknown>>) {
		const data = event.detail;

		await crud.options.stateProcessor.process(data, operation, requestParameters);

		window.location.href = (document.referrer || dashboard.getFirstActionUrl());
	}
</script>

<CrudForm
	{operation}
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
