<script lang="ts">
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import type { ToggleField } from '$lib/Fields/Toggle';

	let {
		field,
		value = $bindable(),
		onChange = () => {},
	}: {
		field: ToggleField;
		value: boolean | undefined;
		onChange: (is_checked: boolean) => void
	} = $props();

	if (value === undefined) {
		value = false;
	}

	let is_checked = $derived(!!value);
</script>

<Toggle
	name={field.name}
	labelText={field.label}
	required={field.options.required ?? true}
	disabled={field.options.disabled}
	helperText={field.options.help}
	on:change={onChange}
	bind:toggled={is_checked}
/>
