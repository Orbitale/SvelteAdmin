<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { FieldInterface } from '../FieldDefinitions/Field';
	import CrudForm from './CrudForm.svelte';
	import type { Options } from '../FieldDefinitions/Options.ts';

	export let fields: FieldInterface<Options>[] = [];
</script>

<CrudForm
	{fields}
	action="edit"
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
