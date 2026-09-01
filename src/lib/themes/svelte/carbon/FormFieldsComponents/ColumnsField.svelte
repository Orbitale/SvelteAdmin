<script lang="ts">
	import Columns from '../Columns/Columns.svelte';
	import type { Columns as ColumnsField } from '$lib/Fields/Columns';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ThemeConfig } from '$lib/types';

	let {
		field,
		operation,
		entityObject = {},
		theme
	}: {
		field: ColumnsField;
		operation: CrudOperation;
		entityObject?: Record<string, unknown>;
		theme: ThemeConfig;
	} = $props();
</script>

<Columns FieldComponent={theme.formField} {field} {operation} {entityObject} {theme} />
