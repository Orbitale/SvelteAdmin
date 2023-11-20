<script lang="ts">
	import Tabs from '../Tabs/Tabs.svelte';
	import theme from "$lib/stores/theme";
    import type {Tabs as TabsField} from "$lib";
    import type {CrudOperation} from "$lib/Crud/Operations.ts";

    export let field: TabsField;
    export let operation: CrudOperation<unknown>;
    export let data: Record<string, unknown> = {};
</script>

<Tabs FieldComponent={$theme.crud.viewField} {field} {operation} {data} />
