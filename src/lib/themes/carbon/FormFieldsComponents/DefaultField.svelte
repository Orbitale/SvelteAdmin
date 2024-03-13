<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { CommonFieldOptions, BaseField } from '$lib/Fields';

	export let field: BaseField<CommonFieldOptions>;
	export let value: object | undefined;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	placeholder={field.options?.placeholder ?? ''}
	required={field.options.required ?? true}
	{value}
/>
