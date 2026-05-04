<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { FileField } from '$lib/Fields/File';

	export let field: FileField;
	export let value: string | undefined;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help ?? 'File URL'}
	placeholder={field.options?.placeholder || 'https://example.com/file.pdf'}
	disabled={field.options.disabled}
	required={field.options.required}
	{value}
/>
