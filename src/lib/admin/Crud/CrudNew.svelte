<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from '$lib/admin/Crud/CrudForm.svelte';
	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
	import type { KeyValueObject } from '$lib/admin/genericTypes.ts';

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
