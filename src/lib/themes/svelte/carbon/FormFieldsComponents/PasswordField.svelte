<script lang="ts">
	import PasswordInput from 'carbon-components-svelte/src/TextInput/PasswordInput.svelte';
	import type { PasswordField } from '$lib/Fields/Password';

	export let field: PasswordField;
	export let value: string | undefined;
</script>

<PasswordInput
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	placeholder={field.options?.placeholder || ''}
	disabled={field.options.disabled}
	required={field.options.required}
	{value}
/>
