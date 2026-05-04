<script lang="ts">
	export let value: string | undefined;
</script>

{#if value && value.length > 0}
	<pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">{value}</pre>
{:else}
	-
{/if}
