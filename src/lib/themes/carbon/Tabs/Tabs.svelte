<script lang="ts">
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';

	import type { Tabs as TabsField } from '$lib/FieldDefinitions/Tabs';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ComponentType } from 'svelte';

	export let FieldComponent: ComponentType;

	export let field: TabsField;
	export let operation: CrudOperation;
	export let data: Record<string, unknown> = {};
</script>

<Tabs>
	{#each field.fields as tab}
		<Tab label={tab.label || tab.name} />
	{/each}
	<svelte:fragment slot="content">
		{#each field.fields as tab}
			<TabContent>
				{#each tab.fields as tabbedField}
					<FieldComponent
						{operation}
						{data}
						field={tabbedField}
						value={data[tabbedField.name]}
						on:fieldChange
					/>
				{/each}
			</TabContent>
		{/each}
	</svelte:fragment>
</Tabs>
