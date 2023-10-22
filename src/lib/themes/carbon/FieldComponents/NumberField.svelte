<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { NumberField } from '$lib/FieldDefinitions/Number.ts';

	export let field: NumberField;
	export let value: string | number | undefined;

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
	on:change
	on:input
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:paste
/>
