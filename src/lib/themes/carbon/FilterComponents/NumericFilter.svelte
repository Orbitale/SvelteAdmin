<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { NumericFilter } from '$lib/Filter';

	export let filter: NumericFilter;
	export let value: string;
</script>

<TextInput
	name={filter.field}
	labelText={filter.label}
	helperText={filter.options.help}
	maxCount={filter.options.maxLength}
	type="number"
	size="sm"
	inline={true}
	{value}
/>
