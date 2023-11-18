<script lang="ts">
	import Columns from '../Columns/Columns.svelte';
	import theme from "$lib/stores/theme";
	import type {Columns as ColumnsField} from "$lib/FieldDefinitions/Columns";
	import type {CrudOperation} from "$lib/Crud/Operations";

	export let field: ColumnsField;
	export let operation: CrudOperation;
	export let data: Record<string, unknown> = {};
</script>

<Columns FieldComponent={$theme.viewField} {field} {operation} {data} />
