<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { ImageField } from '$lib/Fields/Image';

	export let field: ImageField;
	export let value: string | undefined;

	$: hasPreview = typeof value === 'string' && value.length > 0;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help ?? 'Image URL'}
	placeholder={field.options?.placeholder || 'https://example.com/image.png'}
	disabled={field.options.disabled}
	required={field.options.required}
	bind:value
/>
{#if hasPreview}
	<div style="margin-top: 0.5rem;">
		<img
			src={value}
			alt={field.options.alt ?? field.label}
			width={field.options.width}
			height={field.options.height}
			style="max-width: 240px; max-height: 240px; object-fit: contain; border: 1px solid #e0e0e0;"
		/>
	</div>
{/if}
