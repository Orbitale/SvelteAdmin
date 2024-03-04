<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { NumberField } from '$lib/Fields/Number';

	export let field: NumberField;
	export let value: unknown;

	if (typeof value === 'string') {
		value = parseInt(value);
	}
	if (isNaN(value)) {
		value = undefined;
	}
</script>

<NumberInput
	name={field.name}
	label={field.label}
	helperText={field.options.help}
	min={field.options.min}
	max={field.options.max}
	{value}
/>
