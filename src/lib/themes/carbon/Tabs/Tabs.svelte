<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';
	import { _ } from 'svelte-i18n';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { Tabs as TabsField } from '$lib/Fields/Tabs';
	import type { ThemeConfig } from '$lib/types';

	export let FieldComponent: ComponentType;
	export let field: TabsField;
	export let operation: CrudOperation;
	export let entityObject: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;
</script>

<Tabs>
	{#each field.fields as tab, i}
		<Tab label={$_(tab.label || tab.name)} tabindex={i.toString()} />
	{/each}
	<svelte:fragment slot="content">
		{#each field.fields as tab}
			<TabContent>
				{#each tab.fields as tabbedField}
					<svelte:component
						this={FieldComponent}
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
	</svelte:fragment>
</Tabs>
