<script lang="ts">
	import { TextInput } from 'carbon-components-svelte';
	import type { Field } from '../../FieldDefinitions/Field';
	import type { Options } from '../../FieldDefinitions/Options';

	export let field: Field<Options>;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	placeholder={field.options?.placeholder || ''}
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
