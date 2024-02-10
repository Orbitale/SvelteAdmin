<script lang="ts">
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SelectSkeleton from 'carbon-components-svelte/src/Select/SelectSkeleton.svelte';
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import { _ } from 'svelte-i18n';

	import { type CrudOperation, Field } from '$lib/Crud/Operations';
	import type { CrudEntityField } from '$lib/FieldDefinitions/CrudEntity';
	import { CrudDefinition } from '$lib/Crud/definition';

	export let field: CrudEntityField;
	export let operation: CrudOperation;
	export let value: unknown;

	const crud: CrudDefinition<unknown> | undefined =
		operation.dashboard.cruds.filter(
			(def: CrudDefinition<unknown>) => def.name === field.options.crud_name
		)[0] ?? undefined;

	function fetchList() {
		if (!crud) {
			return;
		}

		const fieldOperation = new Field(
			field.options.list_provider_operation?.name ?? 'entity_list',
			field.options.list_provider_operation?.options ?? {}
		);
		fieldOperation.crud = crud;
		fieldOperation.dashboard = operation.dashboard;

		return crud.options.stateProvider.provide(fieldOperation);
	}
</script>

{#if !crud}
	<InlineNotification kind="error" hideCloseButton>
		{$_('error.crud.could_not_find_crud_name', { values: { crud: field.options.crud_name } })}
	</InlineNotification>
{:else}
	{#await fetchList()}
		<SelectSkeleton labelText={$_(field.label)} />
	{:then data}
		{@const values = data}
		<Select name={field.name} labelText={$_(field.label)} selected={value}>
			{#each values as itemValue}
				{@const val =
					itemValue[field.options.list_provider_operation.value_field ?? 'id'] ?? undefined}
				{@const txt = itemValue[field.options.list_provider_operation.label_field] ?? val}
				{#if val && txt}
					<SelectItem value={val} text={txt} />
				{/if}
			{/each}
		</Select>
	{:catch error}
		<InlineNotification kind="error" hideCloseButton>
			{$_('error.crud.form.entity_field_list_fetch_error', { values: { message: error.message } })}
		</InlineNotification>
	{/await}
{/if}
