<script lang="ts">
    import Tag from "carbon-components-svelte/src/Tag/Tag.svelte";

    export let value: string | undefined;

    // URL will be validated if not empty
    let valid = false;

    if (value?.length > 0) {
        try {
            new URL(value, getOrigin()); // Throws exception on invalid URLs
            valid = true;
        } catch (e) {
            valid = false;
        }
    }

    function getOrigin() {
        const w = typeof window !== 'undefined' ? window : {};

        return (w||{})?.location?.origin;
    }
</script>

{#if valid}
    <a href={value}>{value}</a>
{:else}
    {#if value.length > 0}
        <Tag>Invalid URL!</Tag>
    {:else}
        -
    {/if}
{/if}
