<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { Field } from '$lib/FieldDefinitions/Field.ts';
	import type { Options } from '$lib/FieldDefinitions/Options.ts';

	export let field: Field<Options>;
	export let value: object | undefined;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	placeholder={field.options?.placeholder || ''}
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
