<script lang="ts">
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { Columns as ColumnField } from '$lib/FieldDefinitions/Columns';
	import CrudFormField from '$lib/themes/material3/Crud/CrudFormField.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	export let operation: CrudOperation<object>;
	export let field: ColumnField;
	export let data: Record<string, unknown> | undefined = {};
</script>

{#each field.fields as columnedField}
	<Column
		sm={{ span: field.options.size }}
		md={{ span: field.options.size }}
		lg={{ span: field.options.size }}
		xlg={{ span: field.options.size }}
		max={{ span: field.options.size }}
	>
		<CrudFormField
			{operation}
			{data}
			value={data !== undefined ? data[columnedField.name] : null}
			field={columnedField}
		/>
	</Column>
{/each}
