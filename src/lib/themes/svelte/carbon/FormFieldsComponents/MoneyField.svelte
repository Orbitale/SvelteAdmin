<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { MoneyField } from '$lib/Fields/Money';

	export let field: MoneyField;
	export let value: number | string | undefined;

	const currency = field.options.currency ?? 'USD';

	let numericValue: number | null = null;
	$: {
		const parsed = typeof value === 'string' ? parseFloat(value) : value;
		numericValue = typeof parsed === 'number' && !isNaN(parsed) ? parsed : null;
	}
</script>

<NumberInput
	name={field.name}
	label={`${field.label} (${currency})`}
	helperText={field.options.help}
	min={field.options.min}
	max={field.options.max}
	step={0.01}
	disabled={field.options.disabled}
	value={numericValue}
/>
