<script lang="ts">
	import Columns from '../Columns/Columns.svelte';
	import type { Columns as ColumnsField } from '$lib/Fields/Columns';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ThemeConfig } from '$lib/types';

	export let field: ColumnsField;
	export let operation: CrudOperation;
	export let entityObject: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;
</script>

<Columns FieldComponent={theme.viewField} {field} {operation} {entityObject} {theme} {value} />
