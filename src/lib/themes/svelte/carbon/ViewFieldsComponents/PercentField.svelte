<script lang="ts">
	import type { PercentField } from '$lib/Fields/Percent';

	export let field: PercentField;
	export let value: number | string | undefined;

	$: num =
		typeof value === 'number' ? value : value !== undefined && value !== '' ? Number(value) : NaN;
	$: displayed = Number.isNaN(num) ? null : field.options.storedAs === 'ratio' ? num * 100 : num;
	$: decimals = field.options.decimals ?? 2;
</script>

{#if displayed !== null}
	{displayed.toFixed(decimals)}%
{:else}
	-
{/if}
