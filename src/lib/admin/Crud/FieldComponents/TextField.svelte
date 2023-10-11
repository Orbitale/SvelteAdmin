<script lang="ts">
	import { TextInput } from 'carbon-components-svelte';
	import { TextField, type TextOptions } from '../../FieldDefinitions/Text';

	export let field: TextField<TextOptions>;
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
