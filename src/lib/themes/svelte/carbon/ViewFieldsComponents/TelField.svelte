<script lang="ts">
	export let value: string | undefined;
</script>

{#if value && value.length > 0}
	<a href={`tel:${value}`}>{value}</a>
{:else}
	-
{/if}
