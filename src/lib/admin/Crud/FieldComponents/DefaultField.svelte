<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { Field } from '../../FieldDefinitions/Field';
	import type { Options } from '../../FieldDefinitions/Options';

	export let field: Field<Options>;
	export let value: any;
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
