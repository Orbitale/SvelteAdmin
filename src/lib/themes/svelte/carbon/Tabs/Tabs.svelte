<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';
	import { _ } from 'svelte-i18n';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { Tabs as TabsField } from '$lib/Fields/Tabs';
	import type { ThemeConfig } from '$lib/types';

	let {
		FieldComponent,
		field,
		operation,
		entityObject = {},
		value,
		theme
	}: {
		FieldComponent: ComponentType;
		field: TabsField;
		operation: CrudOperation;
		entityObject?: Record<string, unknown>;
		value: unknown;
		theme: ThemeConfig;
	} = $props();
</script>

<Tabs>
	{#each field.fields as tab, i}
		<Tab label={$_(tab.label || tab.name)} tabindex={i.toString()} />
	{/each}
	{#snippet content()}
			{#each field.fields as tab}
				<TabContent>
					{#each tab.fields as tabbedField}
						<FieldComponent
							{operation}
							{entityObject}
							{value}
							{theme}
							field={tabbedField}
							on:fieldChange
						/>
					{/each}
				</TabContent>
			{/each}
	{/snippet}
</Tabs>
