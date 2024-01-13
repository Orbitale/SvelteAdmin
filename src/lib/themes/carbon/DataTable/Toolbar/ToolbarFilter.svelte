<script lang="ts">
	import type { FilterInterface, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';

	export let filter: FilterInterface<FilterOptions>;
	export let theme: ThemeConfig;

	const component = theme.filters[filter.componentName];
</script>

<svelte:component this={component} {filter} />
