<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { NumberField } from '$lib/Fields/Number.js';

	let {
		field,
		value = $bindable()
	}: {
		field: NumberField;
		value: unknown;
	} = $props();

	const injectedValue = $derived.by(() => {
		if (typeof value === 'string') {
			value = parseInt(value);
		}
		if (isNaN(Number(value))) {
			value = undefined;
		}

		return Number(value || 0);
	});
</script>

<NumberInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	min={field.options.min}
	max={field.options.max}
	disabled={field.options.disabled}
	value={injectedValue}
/>
