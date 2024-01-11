<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import { _ } from 'svelte-i18n';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { Columns as ColumnField } from '$lib/FieldDefinitions/Columns';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';

	export let FieldComponent: ComponentType;

	export let field: ColumnField;
	export let operation: CrudOperation;
	export let entityObject: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;
</script>

<Grid fullWidth>
	<Row>
		{#each field.fields as column}
			<Column
				sm={{ span: column.size, offset: column.offset }}
				md={{ span: column.size, offset: column.offset }}
				lg={{ span: column.size, offset: column.offset }}
				xlg={{ span: column.size, offset: column.offset }}
				max={{ span: column.size, offset: column.offset }}
			>
				{#if column.label || column.name}
					{#if operation.name === 'view'}
						<h2>{$_(column.label || column.name)}</h2>
					{:else}
						<span>{$_(column.label || column.name)}</span>
					{/if}
				{/if}
				{#each column.fields as columnedField}
					<svelte:component
						this={FieldComponent}
						{operation}
						{entityObject}
						{theme}
						field={columnedField}
						value={entityObject[columnedField.name]}
						on:fieldChange
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
