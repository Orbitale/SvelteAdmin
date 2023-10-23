<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { KeyValueObject } from '$lib/genericTypes';
	import { type CrudDefinition, TabsField } from '$lib';
	import type { FieldInterface } from '$lib/FieldDefinitions/Field';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import type { StateProviderResult } from '$lib/State/Provider';
	import TabsView from '$lib/themes/carbon/ViewFieldsComponents/TabsView.svelte';
	import CrudViewField from '$lib/themes/carbon/Crud/CrudViewField.svelte';

	export let operation: CrudOperation<unknown>;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: KeyValueObject = {};

	let fields: FieldInterface<Options>[] = operation.fields;

	let tabbed_fields: Array<TabsField> = [];

	let current_tab: TabsField | null = null;
	for (let i = 0; i < fields.length; i++) {
		const field = fields[i];
		if (field instanceof TabsField) {
			current_tab = null;
			tabbed_fields.push(field);
		} else {
			if (!current_tab) {
				current_tab = new TabsField(`tab_${i}`, `Tab #${i + 1}`);
				tabbed_fields.push(current_tab);
			}
			current_tab.fields.push(field);
		}
	}

	let defaultData: StateProviderResult<unknown> = crud.options.stateProvider.provide(
		operation,
		requestParameters
	);

	onMount(async () => {
		const data = await defaultData;
		if (!data) {
			defaultData = crud.options.stateProvider.provide(operation, requestParameters);
		}
	});
</script>

<h2>{$_(operation.label, { values: { name: $_(crud.options.label.singular) } })}</h2>

{#await defaultData}
	<SkeletonText />
	<SkeletonText heading={true} />
	<SkeletonText paragraph={true} lines={3} />
{:then data}
	{#if !data}
		<InlineNotification kind="error">
			{$_('error.crud.entity.not_found')}
		</InlineNotification>
	{:else if tabbed_fields.length === 1 && tabbed_fields[0].name === 'tab_0'}
		{#each fields as field (field.name)}
			<CrudViewField {operation} {field} {data} value={data[field.name]} />
		{/each}
	{:else}
		<TabsView fields={tabbed_fields} {operation} {data} />
	{/if}
{/await}
