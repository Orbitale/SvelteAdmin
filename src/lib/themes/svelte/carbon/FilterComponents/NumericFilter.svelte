<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import type { NumericFilter } from '$lib/Filter';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: NumericFilter;
	export let value: string;
</script>

<FilterContainer {filter}>
	<TextInput
		type="number"
		name={filter.field}
		helperText={filter.options.help}
		placeholder={filter.options?.placeholder || ''}
		maxCount={filter.options.maxLength}
		size="sm"
		{value}
	/>
</FilterContainer>
