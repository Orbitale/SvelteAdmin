<script lang="ts">
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import type { Tabs } from '$lib/FieldDefinitions/Tabs';
	import CrudFormField from '../Crud/CrudFormField.svelte';
	import type { CrudOperation } from '$lib/Crud/Operations';

	export let operation: CrudOperation<object>;
	export let field: Tabs;
	export let data: Record<string, unknown> | undefined = {};
</script>

Haya
<!--{#each field.fields as tabbedField}-->
<!--	<FormGroup>-->
<!--		<CrudFormField-->
<!--			{operation}-->
<!--			{data}-->
<!--			value={data !== undefined ? data[tabbedField.name] : null}-->
<!--			field={tabbedField}-->
<!--		/>-->
<!--	</FormGroup>-->
<!--{/each}-->
