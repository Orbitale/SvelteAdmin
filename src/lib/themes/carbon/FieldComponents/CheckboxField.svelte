<script lang="ts">
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import type { CheckboxField } from '$lib/FieldDefinitions/Checkbox.ts';
	import { createEventDispatcher } from 'svelte';

	export let field: CheckboxField;
	export let value: boolean | undefined;

	if (value === undefined) {
		value = false;
	}

	const dispatchEvent = createEventDispatcher<{
		change: boolean;
	}>();

	$: is_checked = !!value;

	function onChange() {
		dispatchEvent('change', is_checked);
	}
</script>

<Checkbox
	name={field.name}
	labelText={field.label}
	on:check
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:change={onChange}
	on:blur
	bind:checked={is_checked}
/>
{#if field.options.help}
	<!-- TODO use HelperText component whenever it's released in Carbon's repository -->
	<div
		class:bx--form__helper-text={true}
		class:bx--form__helper-text--disabled={field.options.disabled}
	>
		{field.options.help}
	</div>
{/if}
