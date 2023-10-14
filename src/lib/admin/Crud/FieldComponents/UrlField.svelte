<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { UrlField } from '../../FieldDefinitions/Url';

	// Maximum length of an URL in Chrome (and IE…) is 2083, Firefox is 65536 and Safari is 80000.
	// The lowest value is the safest one to use for cross-browser compatibility.
	const maxCount = 2083;

	export let field: UrlField;
	export let value: URL | string | null | undefined;

	if (value instanceof URL) {
		value = value.toString();
	}
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	{maxCount}
	{value}
	on:change
	on:input
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:paste
/>
