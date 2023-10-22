<script lang="ts">
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';

	import CrudFormField from '../Crud/CrudFormField.svelte';
	import type { TabsField } from '$lib';
	import type { CrudOperation } from '$lib/Crud/Operations.ts';

	export let operation: CrudOperation<unknown>;
	export let fields: Array<TabsField> = [];
	export let data: Record<string, unknown> = {};
</script>

<Tabs>
	{#each fields as tabbed_field (tabbed_field.name)}
		<Tab label={tabbed_field.label} />
	{/each}
	<svelte:fragment slot="content">
		{#each fields as tabbed_field (tabbed_field.name)}
			<TabContent>
				<CrudFormField
					{operation}
					{data}
					field={tabbed_field}
					value={data[tabbed_field.name]}
					on:fieldChange
				/>
			</TabContent>
		{/each}
	</svelte:fragment>
</Tabs>
