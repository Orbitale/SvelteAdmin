<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { UrlField } from '$lib/Fields/Url';
	import { _ } from 'svelte-i18n';

	// Maximum length of an URL in Chrome (and IE…) is 2083, Firefox is 65536 and Safari is 80000.
	// The lowest value is the safest one to use for cross-browser compatibility.
	const maxLength = 2083;

	export let field: UrlField;
	export let value: URL | string | null | undefined;

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
