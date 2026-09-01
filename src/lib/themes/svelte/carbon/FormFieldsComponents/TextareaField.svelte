<script lang="ts">
	import TextArea from 'carbon-components-svelte/src/TextArea/TextArea.svelte';
	import type { TextareaField } from '$lib/Fields/Textarea';

	let { field, value = $bindable() }: {
		field: TextareaField;
		value: string | undefined;
	} = $props();

	function onChangeStripTags() {
		if (!field.options.stripTags) {
			return false;
		}
		value = value.replace(/[<>]/gi, '');
	}
</script>

<TextArea
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options.placeholder}
	rows={field.options.rows}
	disabled={field.options.disabled}
	{value}
	on:change={onChangeStripTags}
/>
