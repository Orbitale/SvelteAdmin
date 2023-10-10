<script lang="ts">
	import { FormGroup } from 'carbon-components-svelte';
	import { TabsField, type TabOptions } from '../../FieldDefinitions/TabsField';
	import CrudFormField from '../CrudFormField.svelte';

	export let field: TabsField<TabOptions>;
</script>

{#each field.fields as field}
	<FormGroup>
		<CrudFormField {field} />
	</FormGroup>
{/each}
