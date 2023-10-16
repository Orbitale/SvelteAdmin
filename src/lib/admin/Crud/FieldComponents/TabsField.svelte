<script lang="ts">
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import type { TabsField } from '$lib/admin/FieldDefinitions/TabsField';
	import CrudFormField from '$lib/admin/Crud/CrudFormField.svelte';
	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';

	export let operation: CrudOperation;
	export let field: TabsField;
	export let data: object | undefined = {};
</script>

{#each field.fields as tabbed_field}
	<FormGroup>
		<CrudFormField {operation} {data} value={data[tabbed_field.name]} field={tabbed_field} />
	</FormGroup>
{/each}
