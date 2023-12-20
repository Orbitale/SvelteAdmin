<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextFilter } from '$lib/Filter';

	export let filter: TextFilter;
	export let value: string;
</script>

<TextInput
	name={filter.field}
	labelText={filter.label}
	helperText={filter.options.help}
	placeholder={filter.options?.placeholder || ''}
	maxCount={filter.options.maxLength}
	size="sm"
	inline={true}
	{value}
/>
