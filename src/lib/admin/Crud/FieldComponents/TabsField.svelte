<script lang="ts">
	import { FormGroup } from 'carbon-components-svelte';
	import { TabsField, type TabOptions } from '../../FieldDefinitions/TabsField';
	import CrudFormField from '../CrudFormField.svelte';

	export let field: TabsField<TabOptions>;
	export let data: object | undefined = {};
</script>

{#each field.fields as field}
	<FormGroup>
		<CrudFormField {data} value={data[field.name]} {field} />
	</FormGroup>
{/each}
