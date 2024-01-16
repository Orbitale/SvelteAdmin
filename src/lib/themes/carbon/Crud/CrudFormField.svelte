<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { CommonFieldOptions, FieldInterface } from '$lib/FieldDefinitions/definition';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import { getFormFieldComponent } from '$lib/Theme';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';

	export let operation: CrudOperation;
	export let field: FieldInterface<CommonFieldOptions>;
	export let data: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;

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
	{theme}
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
