<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { IntegerField } from '$lib/Fields/Integer';

	export let field: IntegerField;
	export let value: number | string | undefined;

	let numericValue: number | null = null;
	$: {
		const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
		numericValue = typeof parsed === 'number' && !isNaN(parsed) ? parsed : null;
	}
</script>

<NumberInput
	name={field.name}
	label={field.label}
	helperText={field.options.help}
	min={field.options.min}
	max={field.options.max}
	step={field.options.step ?? 1}
	disabled={field.options.disabled}
	value={numericValue}
/>
