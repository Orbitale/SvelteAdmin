<script lang="ts">
    import type AdminConfig from "./Config/AdminConfig.js";
    import List from "./List/List.svelte";

    export let config: AdminConfig<any>;

    if (!config) {
        throw new Error('You must provide admin configuration to display a CRUD.');
    }
</script>

{#if config.list}
    <List {config} />
{/if}
