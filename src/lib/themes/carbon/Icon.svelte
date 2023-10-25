<script lang="ts">
    import type {ActionIcon} from "$lib/actions.ts";
    import {SvelteComponent} from "svelte";

    export let icon: ActionIcon;

    if (!(icon instanceof SvelteComponent) && typeof icon !== 'function' && typeof icon !== 'string') {
        console.error(`Wrong icon type: ${typeof icon}`);
    }
</script>

{#if icon instanceof SvelteComponent || typeof icon === 'function'}
    <svelte:component this={icon} />
{:else if typeof icon === 'string'}
    {icon}
{:else}
    {icon.toString()}
{/if}
