<script lang="ts">
	import Columns from '../Columns/Columns.svelte';
	import type { Columns as ColumnsField } from '$lib/Fields/Columns.js';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { ThemeConfig } from '$lib/types.js';

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

<Columns FieldComponent={theme.viewField} {field} {operation} {entityObject} {theme} />
