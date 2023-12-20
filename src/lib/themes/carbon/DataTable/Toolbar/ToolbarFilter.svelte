<script lang="ts">
	import type { Filter, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';

	export let filter: Filter<FilterOptions>;
	export let theme: ThemeConfig;

	const component = theme.filters[filter.componentName];
</script>

<svelte:component this={component} {filter} />
