<script lang="ts">
    import {_} from "svelte-i18n";
    import {type FilterInterface, type FilterOptions} from "$lib/Filter";

    export let filter: FilterInterface<FilterOptions>;
</script>

<section>
    <aside class="label">
        <slot name="label">
		    {$_(filter.label || filter.field)}
        </slot>
    </aside>

    <aside class="content">
        <slot />
    </aside>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: start;
    }
    aside {
        min-height: 2rem;
        line-height: var(--cds-body-short-01-line-height, 1.28572);
    }
    .label {
        flex: 1;
    }
    .content {
        flex: 3;
    }
</style>
