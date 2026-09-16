<script lang="ts">
	import type { Component } from 'svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import { _ } from 'svelte-i18n';

	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { Columns as ColumnField } from '$lib/Fields/Columns.js';
	import type { ThemeConfig } from '$lib/types.js';


	let {
		FieldComponent,
		field,
		operation,
		theme,
		entityObject = {}
	}: {
		FieldComponent: Component;
		field: ColumnField;
		operation: CrudOperation;
		theme: ThemeConfig;
		entityObject?: Record<string, unknown>;
	} = $props();
</script>

<Grid fullWidth>
	<Row>
		{#each field.fields as column}
			<Column
				sm={{ span: column.size, offset: column.offset || 0 }}
				md={{ span: column.size, offset: column.offset || 0 }}
				lg={{ span: column.size, offset: column.offset || 0 }}
				xlg={{ span: column.size, offset: column.offset || 0 }}
				max={{ span: column.size, offset: column.offset || 0 }}
			>
				{#if column.label || column.name}
					{#if operation.name === 'view'}
						<h2>{$_(String(column.label || column.name))}</h2>
					{:else}
						<span>{$_(String(column.label || column.name))}</span>
					{/if}
				{/if}
				{#each column.fields as columnedField}
					<FieldComponent
						{operation}
						{entityObject}
						{theme}
						field={columnedField}
						value={entityObject[columnedField.name]}
					/>
				{/each}
			</Column>
		{/each}
	</Row>
</Grid>

<style>
	span {
		display: block;
	}
</style>
