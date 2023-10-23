<script lang="ts">
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import type { TabsField } from '$lib/FieldDefinitions/TabsField';
	import CrudFormField from '../Crud/CrudFormField.svelte';
	import type { CrudOperation } from '$lib/Crud/Operations';

	export let operation: CrudOperation<object>;
	export let field: TabsField;
	export let data: Record<string, unknown> | undefined = {};
</script>

{#each field.fields as tabbed_field}
	<FormGroup>
		<CrudFormField
			{operation}
			{data}
			value={data !== undefined ? data[tabbed_field.name] : null}
			field={tabbed_field}
		/>
	</FormGroup>
{/each}
