<script lang="ts">
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SelectSkeleton from 'carbon-components-svelte/src/Select/SelectSkeleton.svelte';
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import { _ } from 'svelte-i18n';

	import { type CrudOperation, SingleField } from '$lib/Crud/Operations.js';
	import type { CrudEntityField } from '$lib/Fields/CrudEntity.js';
	import { CrudDefinition } from '$lib/Crud/index.js';

	let { field, operation, value }: {
		field: CrudEntityField;
		operation: CrudOperation;
		value: any;
	} = $props();

	const crud: CrudDefinition<any> | undefined = $derived(operation.dashboard.cruds.filter((def: CrudDefinition<any>) => def.name === field.options.crud_name)[0] ?? undefined);

	function fetchList(): Promise<undefined|null|Array<Record<'id'|string, any>>> {
		if (!crud) {
			console.error('No CRUD to fetch entities list.');
			return Promise.resolve(null);
		}

		const fieldOperation = new SingleField(
			field.options.list_provider_operation?.name ?? 'entity_list',
			field.options.list_provider_operation?.options ?? {}
		);
		fieldOperation.crud = crud;
		fieldOperation.dashboard = operation.dashboard;

		return crud.options.stateProvider.provide(fieldOperation, {});
	}
</script>

{#if !crud}
	<InlineNotification kind="error" hideCloseButton>
		{$_('error.crud.could_not_find_crud_name', { values: { crud: field.options.crud_name } })}
	</InlineNotification>
{:else}
	{#await fetchList()}
		<SelectSkeleton />
	{:then data}
		{@const values = data}
		<Select
			name={field.name}
			labelText={$_(field.label)}
			selected={isNaN(Number(value)) ? String(value) : Number(value)}
			disabled={field.options.disabled}
		>
			{#if !values || !values.length}
				<SelectItem value="" text="-" />
			{:else}
				{#each values as itemValue (itemValue)}
					{@const val = itemValue[field.options?.list_provider_operation?.value_field ?? 'id'] ?? undefined}
					{@const txt = field.options?.list_provider_operation?.label_field ? (itemValue[field.options?.list_provider_operation?.label_field] ?? val) : ""}
					{#if val && txt}
						<SelectItem value={val} text={txt} />
					{/if}
				{/each}
			{/if}
		</Select>
	{:catch error}
		<InlineNotification kind="error" hideCloseButton>
			{$_('error.crud.form.entity_field_list_fetch_error', { values: { message: error.message } })}
		</InlineNotification>
	{/await}
{/if}
