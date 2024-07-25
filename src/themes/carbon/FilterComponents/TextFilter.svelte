<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextFilter } from '$lib/Filter';
	import FilterContainer from '$themes/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: TextFilter;
	export let value: string;
</script>

<FilterContainer {filter}>
	<TextInput
		name={filter.field}
		helperText={filter.options.help}
		placeholder={filter.options?.placeholder || ''}
		maxCount={filter.options.maxLength}
		size="sm"
		{value}
	/>
</FilterContainer>
