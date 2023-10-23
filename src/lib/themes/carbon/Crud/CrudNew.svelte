<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from './CrudForm.svelte';
	import type { CrudOperation } from '../../../Crud/Operations';
	import type { CrudDefinition } from '../../../Crud/definition';
	import type { KeyValueObject } from '../../../genericTypes';

	export let operation: CrudOperation<unknown>;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: KeyValueObject = {};

	function onSubmitData(event: CustomEvent<Record<string, unknown>>) {
		const data = event.detail;

		crud.options.stateProcessor.process(data, operation, requestParameters);
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
