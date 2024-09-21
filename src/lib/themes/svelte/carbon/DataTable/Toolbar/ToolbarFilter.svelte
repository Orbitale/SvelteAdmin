<script lang="ts">
	import type { FilterInterface, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/types';

	export let filter: FilterInterface<FilterOptions>;
	export let theme: ThemeConfig;
	export let value: undefined | string | Array<string>;

	const component = theme.filters[filter.componentName];
</script>

<svelte:component this={component} {filter} {value} />
