<script lang="ts">
	export let value: string | undefined;
</script>

{#if value && value.length > 0}
	<code>{value}</code>
{:else}
	-
{/if}
