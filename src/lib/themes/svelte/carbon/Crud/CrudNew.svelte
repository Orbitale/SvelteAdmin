<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from './CrudForm.svelte';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { CrudDefinition } from '$lib/Crud/index.js';
	import type { DashboardDefinition } from '$lib/Dashboard.js';
	import type { RequestParameters } from '$lib/Request.js';
	import type { SubmittedData } from '$lib/Crud/Form.js';

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
		try {
			await crud.options.stateProcessor.process(data, operation, requestParameters);
		} catch (err) {
			console.error('SUBMIT ERROR');
			console.error(err);

			return;
		}

		window.location.href = dashboard.getFirstActionUrl();
	}
</script>

<CrudForm theme={dashboard.theme} {operation} {onSubmitData}>
	{#snippet formHeader()}
		<h2>{$_(operation.label, { values: { name: $_(crud.options.label.singular) } })}</h2>
	{/snippet}
</CrudForm>
