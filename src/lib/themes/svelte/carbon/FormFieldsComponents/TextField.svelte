<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextField } from '$lib/Fields/Text';

	let {
		field,
		value = $bindable(),
	}: {
		field: TextField;
		value: string | undefined;
	} = $props();

	function onChangeStripTags() {
		if (!field.options.stripTags) {
			return false;
		}
		value = value.replace(/[<>]/gi, '');
	}
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	maxCount={field.options.maxLength}
	disabled={field.options.disabled}
	{value}
	on:change={onChangeStripTags}
/>
