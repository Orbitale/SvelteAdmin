<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Column from "carbon-components-svelte/src/Grid/Column.svelte";
	import Grid from "carbon-components-svelte/src/Grid/Grid.svelte";
	import Row from "carbon-components-svelte/src/Grid/Row.svelte";
	import {_} from 'svelte-i18n';

	import type {CrudOperation} from "$lib/Crud/Operations";
	import type {Columns as ColumnField} from "$lib/FieldDefinitions/Columns"

		export let FieldComponent: ComponentType;

    export let operation: CrudOperation;
    export let field: ColumnField;
    export let data: Record<string, unknown> | undefined = {};
</script>

<Grid fullWidth>
	<Row>
		{#each field.fields as column}
			<Column
				sm={{span: column.size, offset: column.offset}}
				md={{span: column.size, offset: column.offset}}
				lg={{span: column.size, offset: column.offset}}
				xlg={{span: column.size, offset: column.offset}}
				max={{span: column.size, offset: column.offset}}
			>
				{#if column.label || column.name}
					<h2>{$_(column.label || column.name)}</h2>
				{/if}
				{#each column.fields as columnedField}
					<FieldComponent
						{operation}
						{data}
						field={columnedField}
						value={data[columnedField.name]}
						on:fieldChange
					/>
				{/each}
			</Column>
		{/each}
	</Row>
</Grid>
