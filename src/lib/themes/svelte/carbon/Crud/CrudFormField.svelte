<script lang="ts">
	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ThemeConfig } from '$lib/types';

	let {
		operation,
		field,
		theme,
		value = $bindable(),
		onFieldChange = () => {},
		data = {},
	}: {
		operation: CrudOperation;
		field: FieldInterface<CommonFieldOptions>;
		theme: ThemeConfig;
		value: unknown;
		onFieldChange?: (data: {"key": string, value: object | unknown}) => void;
		data?: Record<string, unknown>;
	} = $props();

	if (value === undefined && data) {
		value = data[field.name];
	}

	function propagateFieldChange(e: InputEvent) {
		onFieldChange({key: field.name, value: e.detail});
	}

	const formComponent = operation?.dashboard.theme.formFields[field.formComponent];

	const SvelteComponent = $derived(formComponent);
</script>

<SvelteComponent
	{field}
	{operation}
	{value}
	{data}
	{theme}
	on:change={propagateFieldChange}
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
