<script lang="ts">
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import type { MultiChoiceField } from '$lib/Fields/MultiChoice';

	export let field: MultiChoiceField;
	export let value: Array<string | number> | undefined;

	$: items = field.options.choices.map((choice) => ({
		id: String(choice.value),
		text: choice.label,
		disabled: choice.disabled ?? false
	}));

	$: selectedIds = (value ?? []).map((v) => String(v));

	function onSelected(event: CustomEvent<{ selectedIds: Array<string> }>) {
		value = event.detail.selectedIds;
	}
</script>

<MultiSelect
	titleText={field.label}
	helperText={field.options.help}
	placeholder={field.options.placeholder ?? ''}
	disabled={field.options.disabled}
	{items}
	{selectedIds}
	on:select={onSelected}
/>
<input type="hidden" name={field.name} value={(value ?? []).join(',')} />
