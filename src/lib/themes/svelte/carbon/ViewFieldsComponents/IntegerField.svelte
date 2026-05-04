<script lang="ts">
	export let value: number | string | undefined;

	$: num =
		typeof value === 'number' ? value : value !== undefined && value !== '' ? Number(value) : NaN;
</script>

{#if !Number.isNaN(num)}
	{Math.trunc(num)}
{:else}
	-
{/if}
