<script lang="ts">
	import type { FilterInterface, FilterOptions } from '$lib/Filter.js';
	import type { ThemeConfig } from '$lib/types.js';

	let {
		filter,
		theme,
		value
	}: {
		filter: FilterInterface<FilterOptions>;
		theme: ThemeConfig;
		value: undefined | string | Array<string>;
	} = $props();

	const FilterComponent = $derived(theme.filters[filter.componentName]);
</script>

<FilterComponent {filter} {value} />
