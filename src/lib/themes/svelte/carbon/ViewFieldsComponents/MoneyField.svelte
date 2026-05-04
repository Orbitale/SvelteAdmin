<script lang="ts">
	import type { MoneyField } from '$lib/Fields/Money';

	export let field: MoneyField;
	export let value: number | string | undefined;

	$: num =
		typeof value === 'number' ? value : value !== undefined && value !== '' ? Number(value) : NaN;

	function format(n: number): string {
		const currency = field.options.currency ?? 'USD';
		try {
			return new Intl.NumberFormat(field.options.displayLocale, {
				style: 'currency',
				currency
			}).format(n);
		} catch {
			return `${n} ${currency}`;
		}
	}
</script>

{#if !Number.isNaN(num)}
	{format(num)}
{:else}
	-
{/if}
