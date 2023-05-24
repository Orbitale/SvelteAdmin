<script lang="ts">
    import type AdminConfig from "../Config/AdminConfig.js";
    import ItemHeadCell from "./ItemHeadCell.svelte";
    import ItemLine from "./ItemLine.svelte";

    export let config: AdminConfig<any>;

    const fields = config.list.fields;
    const actions = config.list.actions;

    const filters = [];

    let data = [];

    $: config.list.getData(filters).then((incomingData) => data = incomingData)
</script>

<table
    id="paginated-table"
    class="table table-bordered table-responsive table-hover table-striped table-sm"
>
    <thead>
        <tr id="paginated-table-header-fields">
            {#each fields as field}
                <ItemHeadCell {field} />
            {/each}
            {#if actions.length}
                <th class="actions-header">Actions</th>
            {/if}
        </tr>
    </thead>

    <tbody>
    {#key data}
        {#each data as item, i}
            <ItemLine {item} {fields} {actions} />
        {:else}
            <tr>
                <td colSpan={fields.length + (actions.length ? 1 : 0)}>
                    <div id="no-elements">No elements found.</div>
                </td>
            </tr>
        {/each}
    {/key}
    </tbody>
</table>

<style lang="scss">
    #paginated-table {
        font-size: 0.8em;
    }
    .actions-header {
        text-align: center;
    }
    #previous-page,
    #next-page {
        font-size: 2.5em;
        width: 2.5em;
        height: 2.5em;
    }
    #pages-text {
        text-align: center;
        line-height: 4em;
        font-size: 1.5em;
    }
    #previous-page {
        float: left;
    }
    #next-page {
        float: right;
    }

    #no-elements {
        padding: 16px;
    }
</style>
