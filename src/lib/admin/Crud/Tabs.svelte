<script lang="ts">
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import CrudFormField from './CrudFormField.svelte';
	import type { TabsField } from '../FieldDefinitions/TabsField';
	import type { CrudAction } from './actions';

	export let action: CrudAction;
	export let fields: Array<TabsField> = [];
	export let defaultData: object = {};
</script>

<Tabs>
	{#each fields as tabbed_field (tabbed_field.name)}
		<Tab label={tabbed_field.label} />
	{/each}
	<svelte:fragment slot="content">
		{#each fields as tabbed_field (tabbed_field.name)}
			<TabContent>
				<CrudFormField
					action={action}
					field={tabbed_field}
					{defaultData}
					value={defaultData[tabbed_field.name]}
					on:fieldChange
				/>
			</TabContent>
		{/each}
	</svelte:fragment>
</Tabs>
