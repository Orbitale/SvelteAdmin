<script lang="ts">
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { ToggleField } from '$lib/FieldDefinitions/Toggle.ts';

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
		dispatchEvent('change', is_checked);
	}
</script>

<Toggle
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:change={onChange}
	on:keyup
	on:focus
	on:blur
	bind:toggled={is_checked}
/>
