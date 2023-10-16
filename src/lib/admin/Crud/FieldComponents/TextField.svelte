<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextField } from '$lib/admin/FieldDefinitions/Text';

	export let field: TextField;
	export let value: string | undefined;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	maxCount={field.options.maxLength}
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
