<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from '$lib/admin/Crud/CrudForm.svelte';
	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
	// import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
	// import type { KeyValueObject } from '$lib/admin/genericTypes.ts';

	export let operation: CrudOperation;
	// export let crud: CrudDefinition<object>;
	// export let requestParameters: KeyValueObject = {};
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
>
	<svelte:fragment slot="form-header">
		<h1>{$_('crud.header.new')}</h1>
	</svelte:fragment>
</CrudForm>
