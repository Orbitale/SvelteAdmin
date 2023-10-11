<script lang="ts">
	import { NumberInput } from 'carbon-components-svelte';
	import { NumberField, type NumberOptions } from '../../FieldDefinitions/Number';

	export let field: NumberField<NumberOptions>;
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
