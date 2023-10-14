<script lang="ts">
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import type { TabsField } from '../../FieldDefinitions/TabsField';
	import CrudFormField from '../CrudFormField.svelte';
	import type { CrudAction } from '../actions.ts';

	export let action: CrudAction;
	export let field: TabsField;
	export let data: object | undefined = {};
</script>

{#each field.fields as tabbed_field}
	<FormGroup>
		<CrudFormField {action} {data} value={data[tabbed_field.name]} field={tabbed_field} />
	</FormGroup>
{/each}
