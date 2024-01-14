<script lang="ts">
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { ToggleField } from '$lib/FieldDefinitions/Toggle';

	export let field: ToggleField;
	export let value: boolean | undefined;

	if (value === undefined) {
		value = false;
	}

	const dispatchEvent = createEventDispatcher<{
		change: boolean;
	}>();

	$: is_checked = value;

	function onChange() {
		dispatchEvent('change', !!is_checked);
	}
</script>

<Toggle
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	on:change={onChange}
	bind:toggled={is_checked}
/>
