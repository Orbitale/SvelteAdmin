<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { SlugField } from '$lib/Fields/Slug';

	export let field: SlugField;
	export let value: string | undefined;

	function slugify() {
		if (typeof value !== 'string') {
			return;
		}
		value = value
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || 'my-slug'}
	maxlength={field.options.maxLength}
	disabled={field.options.disabled}
	required={field.options.required}
	{value}
	on:blur={slugify}
/>
