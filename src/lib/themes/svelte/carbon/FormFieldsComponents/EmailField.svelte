<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { CommonFieldOptions, BaseField } from '$lib/Fields';

	let { field, value }: {
		field: BaseField<CommonFieldOptions>;
		value: string | undefined;
	} = $props();
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	type="email"
	placeholder={field.options?.placeholder ?? ''}
	required={field.options.required ?? true}
	{value}
/>
