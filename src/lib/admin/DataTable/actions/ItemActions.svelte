<script lang="ts">
    import {type Action} from "../../actions";
    import SingleAction from "./SingleAction.svelte";

    export let actions: Action[] = [];
    export let item: any = undefined;
</script>

{#each actions as action}
    <SingleAction {action} {item} />
{/each}
