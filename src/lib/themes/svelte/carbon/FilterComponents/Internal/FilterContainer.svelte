<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Snippet } from 'svelte';
	import { type FilterInterface, type FilterOptions } from '$lib/Filter.js';

	let {
		filter,
		children
	}: {
		filter: FilterInterface<FilterOptions>;
		children?: Snippet;
	} = $props();
</script>

<section>
	<aside class="label">
		{$_(filter.label || filter.field)}
	</aside>

	<aside class="content">
		{@render children?.()}
	</aside>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: start;
	}
	aside {
		min-height: 2rem;
		line-height: var(--cds-body-short-01-line-height, 1.28572);
	}
	.label {
		flex: 1;
	}
	.content {
		flex: 3;
	}
</style>
