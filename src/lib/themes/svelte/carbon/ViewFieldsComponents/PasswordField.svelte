<script lang="ts">
	export let value: string | undefined;

	$: masked = value && value.length > 0 ? '•'.repeat(Math.min(value.length, 12)) : '';
</script>

{#if masked}
	<span aria-label="hidden password">{masked}</span>
{:else}
	-
{/if}
