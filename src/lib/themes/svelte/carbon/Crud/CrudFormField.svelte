<script lang="ts">
	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields/index.js';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { ThemeConfig } from '$lib/types.js';

	let {
		operation,
		field,
		theme,
		value = $bindable(),
		onFieldChange = () => {},
		data = {}
	}: {
		operation: CrudOperation;
		field: FieldInterface<CommonFieldOptions>;
		theme: ThemeConfig;
		value: unknown;
		onFieldChange?: (data: { key: string; value: object | unknown }) => void;
		data?: Record<string, unknown>;
	} = $props();

	let storedValue = $derived.by(() => {
		let innerValue = value;
		if (innerValue === undefined && data) {
			innerValue = data[field.name];
		}
		return innerValue;
	});

	function propagateFieldChange(e: InputEvent) {
		onFieldChange({ key: field.name, value: e.detail });
	}

	const formComponent = $derived(operation?.dashboard.theme.formFields[field.formComponent]);

	const SvelteComponent = $derived(formComponent);
</script>

<SvelteComponent
	{field}
	{operation}
	value={storedValue}
	{data}
	{theme}
	on:change={propagateFieldChange}
/>
