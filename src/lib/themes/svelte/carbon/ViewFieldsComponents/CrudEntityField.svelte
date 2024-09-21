<script lang="ts">
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';
	import { _ } from 'svelte-i18n';

	import { type CrudOperation, SingleField } from '$lib/Crud/Operations';
	import type { CrudEntityField } from '$lib/Fields/CrudEntity';
	import { CrudDefinition } from '$lib/Crud';

	export let field: CrudEntityField;
	export let operation: CrudOperation;
	export let value: unknown;

	const crud: CrudDefinition<unknown> | undefined =
		operation.dashboard.cruds.filter(
			(def: CrudDefinition<unknown>) => def.name === field.options.crud_name
		)[0] ?? undefined;

	async function fetchData() {
		if (!crud) {
			console.error('No CRUD to fetch data from.');
			return;
		}

		const fieldOperation = new SingleField(
			field.options.get_provider_operation?.name ?? 'entity_view',
			field.options.get_provider_operation?.options ?? {}
		);
		fieldOperation.crud = crud;
		fieldOperation.dashboard = operation.dashboard;

		return crud.options.stateProvider.provide(fieldOperation, {
			field_value: value
		});
	}
</script>

{#if !crud}
	<InlineNotification kind="error" hideCloseButton>
		{$_('error.crud.could_not_find_crud_name', { values: { crud: field.options.crud_name } })}
	</InlineNotification>
{:else}
	{#await fetchData()}
		<SkeletonText />
	{:then data}
		{@const item = data[field.options.get_provider_operation.entity_field] ?? undefined}
		{#if !item}
			<InlineNotification kind="error" hideCloseButton>
				{$_('error.crud.form.entity_field_view_fetch_error', {
					values: { message: 'Field not found' }
				})}
			</InlineNotification>
		{:else}
			{item}
		{/if}
	{:catch error}
		<InlineNotification kind="error" hideCloseButton>
			{$_('error.crud.form.entity_field_view_fetch_error', { values: { message: error.message } })}
		</InlineNotification>
	{/await}
{/if}
