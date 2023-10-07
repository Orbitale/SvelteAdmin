<script lang="ts">
    import { DataTable } from "carbon-components-svelte";
    import type {DataTableHeader, DataTableRow} from "carbon-components-svelte/types/DataTable/DataTable.svelte";

    import ItemActions from "./actions/ItemActions.svelte";
    import {type Action} from "../actions";

    export let headers: Array<DataTableHeader> = [];
    export let rows: Array<DataTableRow> = [];

    export let actions: Action[] = [];

    let actionsCellIndex = -1;

    if (actions.length) {
        headers.push({
            key: '__item_actions',
            empty: true,
        });
        actionsCellIndex = headers.length - 1;
    }
</script>

<DataTable headers={headers} rows={rows} {...$$restProps}>
    <div slot="cell" let:cell let:row let:cellIndex>
        {#if cellIndex === actionsCellIndex}
            <ItemActions {actions} item={row} />
        {:else}
            {cell.display ? cell.display(cell.value) : cell.value}
        {/if}
    </div>
</DataTable>
