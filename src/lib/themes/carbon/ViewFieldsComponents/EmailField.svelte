<script lang="ts">
	import Tag from "carbon-components-svelte/src/Tag/Tag.svelte";

    export let value: string | undefined;
</script>

{#if value !== '' && value && value.length > 0}
    <Tag>{value}</Tag>
{:else}
    -
{/if}
