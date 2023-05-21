<script lang="ts">
    import type List from "./Config/List";

    export let list: List<any>;

    if (!list) {
        throw new Error('You must provide at least a list configuration.');
    }
</script>
