<script lang="ts">
	import TextArea from 'carbon-components-svelte/src/TextArea/TextArea.svelte';
	import type { MarkdownField } from '$lib/Fields/Markdown';

	export let field: MarkdownField;
	export let value: string | undefined;
</script>

<TextArea
	name={field.name}
	labelText={field.label}
	helperText={field.options.help ?? 'Markdown is supported.'}
	placeholder={field.options.placeholder ?? ''}
	rows={field.options.rows ?? 8}
	disabled={field.options.disabled}
	{value}
/>
