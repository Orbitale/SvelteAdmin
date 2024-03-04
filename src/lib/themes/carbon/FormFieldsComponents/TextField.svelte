<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextField } from '$lib/Fields/Text';

	export let field: TextField;
	export let value: string | undefined;

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
	{value}
	on:change={onChangeStripTags}
/>
