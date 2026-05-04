<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TelField } from '$lib/Fields/Tel';

	export let field: TelField;
	export let value: string | undefined;
</script>

<TextInput
	name={field.name}
	labelText={field.label}
	type="tel"
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	disabled={field.options.disabled}
	required={field.options.required}
	{value}
/>
