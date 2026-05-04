<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { PercentField } from '$lib/Fields/Percent';

	export let field: PercentField;
	export let value: number | string | undefined;

	const storedAs = field.options.storedAs ?? 'percent';

	let numericValue: number | null = null;
	$: {
		const parsed = typeof value === 'string' ? parseFloat(value) : value;
		if (typeof parsed === 'number' && !isNaN(parsed)) {
			numericValue = storedAs === 'ratio' ? parsed * 100 : parsed;
		} else {
			numericValue = null;
		}
	}
</script>

<NumberInput
	name={field.name}
	label={field.label + ' (%)'}
	helperText={field.options.help}
	min={field.options.min ?? 0}
	max={field.options.max ?? 100}
	step={1}
	disabled={field.options.disabled}
	value={numericValue}
/>
