<script lang="ts">
	import { _ } from 'svelte-i18n';

	import CrudForm from '$lib/admin/Crud/CrudForm.svelte';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
	import type { CrudAction } from '$lib/admin/Crud/actions.ts';
	import type { KeyValueObject } from '$lib/admin/generic_types.ts';

	export let crud: CrudDefinition<object>;
	export let action: CrudAction;
	export let requestParameters: KeyValueObject = {};
</script>

<CrudForm
	crudAction={action}
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
