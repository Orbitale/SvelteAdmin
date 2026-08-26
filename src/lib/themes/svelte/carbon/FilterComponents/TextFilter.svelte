<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { TextFilter } from '$lib/Filter';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	let { filter, value }: {
		filter: TextFilter;
		value: string;
	} = $props();
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
