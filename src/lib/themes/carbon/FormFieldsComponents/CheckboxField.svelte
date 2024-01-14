<script lang="ts">
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import type { CheckboxField } from '$lib/FieldDefinitions/Checkbox';
	import { createEventDispatcher } from 'svelte';

	export let field: CheckboxField;
	export let value: unknown;

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
	required={field.options.required ?? true}
	on:change={onChange}
	bind:checked={is_checked}
/>
{#if field.options.help}
	<!-- TODO use HelperText component whenever it's released in Carbon's repository -->
	<div
		class:bx--form__helper-text={true}
		class:bx--form__helper-text--disabled={field.options.disabled ?? false}
	>
		{field.options.help}
	</div>
{/if}
