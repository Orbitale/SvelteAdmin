<script lang="ts">
	import { TextInput } from 'carbon-components-svelte';
	import { UrlField, type UrlOptions } from '../../FieldDefinitions/Url';

	// Maximum length of an URL in Chrome (and IE…) is 2083, Firefox is 65536 and Safari is 80000.
	// The lowest value is the safest one to use for cross-browser compatibility.
	const maxCount = 2083;

	export let field: UrlField<UrlOptions>;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	{maxCount}
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
