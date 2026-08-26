<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Snippet } from 'svelte';
	import { type FilterInterface, type FilterOptions } from '$lib/Filter';

	let {
		filter,
		label = null,
	  children,
	}: {
		filter: FilterInterface<FilterOptions>;
		label?: Snippet;
		children?: Snippet;
	} = $props();
</script>

<section>
	<aside class="label">
		{#if label}
			{@render label()}
		{:else}
			{$_(filter.label || filter.field)}
		{/if}
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
