<script lang="ts">
	import { _ } from 'svelte-i18n';

	import {page} from "$app/stores";

	import CrudForm from './CrudForm.svelte';
	import type {CrudDefinition} from "./definition.ts";
	import type {CrudAction} from "./actions.ts";

	export let crud: CrudDefinition;
	export let action: CrudAction;

	let id: string = $page.params.id || $page.url.searchParams.id;

	// TODO: reuse in forms
	let defaultData = crud.options.stateProvider?.provide(action, {id: id, ...$page.url.searchParams});
</script>

<pre>Default data:
{JSON.stringify(defaultData, null, 4)}</pre>

<CrudForm
	fields={action.fields}
	crudAction={action}
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
