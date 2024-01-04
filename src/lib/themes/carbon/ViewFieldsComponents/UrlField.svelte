<script lang="ts">
    import Tag from "carbon-components-svelte/src/Tag/Tag.svelte";
    import Launch from "carbon-icons-svelte/lib/Launch.svelte";
    import {UrlField} from "$lib/FieldDefinitions/Url";

    export let value: string | undefined;
    export let field: UrlField;

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

    const attrs = {};
    if (field.options.openInNewTab) {
        attrs['target'] = '_blank';
        attrs['rel'] = 'noopener';
    }
</script>

{#if valid}
    <a {...attrs} href={value}>
        {#if field.options.openInNewTab}
            <Launch size={16} />
        {/if}
        {value}
    </a>
{:else}
    {#if value.length > 0}
        <Tag>Invalid URL!</Tag>
    {:else}
        -
    {/if}
{/if}
