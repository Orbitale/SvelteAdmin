<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { UrlField } from '$lib/Fields/Url';
	import { _ } from 'svelte-i18n';

	// Maximum length of an URL in IE and Edge is between 2047 and 2083, Chrome is between 2047 and 32779 (depending on version), Firefox is from 65536 to 300k (depending on version), Safari is between 64k and 80k (depending on version), and servers can configure the max URL length.
	// Some source: https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers/417184#417184
	// The lowest value is the safest one to use for cross-browser and servers compatibility. Rounded to 2000 to avoid picky questions.
	const maxLength = 2000;

	let { field, value = $bindable() }: {
		field: UrlField;
		value: URL | string | null | undefined;
	} = $props();

	if (value instanceof URL) {
		value = value.toString();
	}
</script>

<TextInput
	name={field.name}
	labelText={$_(field.label || field.name)}
	helperText={field.options.help ? $_(field.options.help) : ''}
	placeholder={field.options?.placeholder || ''}
	maxCount={maxLength}
	disabled={field.options.disabled}
	{value}
/>
