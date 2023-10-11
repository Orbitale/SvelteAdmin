<script lang="ts">
	import { TextArea } from 'carbon-components-svelte';
	import { TextareaField, type TextareaOptions } from '../../FieldDefinitions/Textarea';

	export let field: TextareaField<TextareaOptions>;
	export let value: string | undefined;
</script>

<TextArea
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options.placeholder}
	rows={field.options.rows}
	{value}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:change
	on:input
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:paste
/>
