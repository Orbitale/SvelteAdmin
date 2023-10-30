<script lang="ts">
	import type { ActionIcon } from '$lib/actions';
	import { SvelteComponent } from 'svelte';

	export let icon: ActionIcon;

	if (
		!(icon instanceof SvelteComponent) &&
		typeof icon !== 'function' &&
		typeof icon !== 'string' &&
		typeof icon.$$render === 'undefined'
	) {
		console.error(`Wrong icon type: ${typeof icon}`, icon);
	}
</script>

{#if icon instanceof SvelteComponent || typeof icon === 'function' || typeof icon.$$render !== 'undefined'}
	<svelte:component this={icon} />
{:else if typeof icon === 'string'}
	{icon}
{:else}
	{icon.toString()}
{/if}
