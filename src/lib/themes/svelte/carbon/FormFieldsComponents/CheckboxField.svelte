<script lang="ts">
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import type { CheckboxField } from '$lib/Fields/Checkbox';

	let {
		field,
		value = $bindable(),
		onChange = () => {},
	}: {
		field: CheckboxField;
		value: boolean | undefined;
		onChange: (is_checked: boolean) => void
	} = $props();

	if (value === undefined) {
		value = false;
	}

	let is_checked = $derived(!!value);
</script>

<Checkbox
	name={field.name}
	labelText={field.label}
	required={field.options.required ?? true}
	disabled={field.options.disabled}
	helperText={field.options.help}
	on:change={onChange}
	bind:checked={is_checked}
/>
