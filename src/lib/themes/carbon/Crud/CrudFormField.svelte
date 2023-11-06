<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { FieldInterface } from '$lib/FieldDefinitions/Field';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import { getFormFieldComponent } from '$lib/Theme';

	export let operation: CrudOperation<object>;
	export let field: FieldInterface<Options>;
	export let data: Record<string, unknown> = {};
	export let value: unknown;

	if (value === undefined && data) {
		value = data[field.name];
	}

	const dispatchEvent = createEventDispatcher<{
		fieldChange: {
			key: string;
			value: object | unknown;
		};
	}>();

	function onFieldChange(e: InputEvent) {
		dispatchEvent('fieldChange', {
			key: field.name,
			value: e.detail
		});
	}

	const formComponent = getFormFieldComponent(field.formComponent);
</script>

<svelte:component
	this={formComponent}
	{field}
	{operation}
	{value}
	{data}
	on:change={onFieldChange}
	on:blur
	on:check
	on:click
	on:focus
	on:input
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
	on:toggle
/>
