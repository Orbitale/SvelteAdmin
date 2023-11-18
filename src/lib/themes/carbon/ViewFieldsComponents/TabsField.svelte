<script lang="ts">
	import Tabs from '../Tabs/Tabs.svelte';
	import theme from "$lib/stores/theme";
    import type {Tabs as TabsField} from "$lib";
    import type {CrudOperation} from "$lib/Crud/Operations";

    export let field: TabsField;
    export let operation: CrudOperation;
    export let data: Record<string, unknown> = {};
</script>

<Tabs FieldComponent={$theme.viewField} {field} {operation} {data} />
