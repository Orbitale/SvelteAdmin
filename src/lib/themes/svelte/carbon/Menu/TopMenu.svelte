<script lang="ts">
	import Header from 'carbon-components-svelte/src/UIShell/Header.svelte';
	import SkipToContent from 'carbon-components-svelte/src/UIShell/SkipToContent.svelte';

	import TopLeftMenu from '$lib/themes/svelte/carbon/Menu/TopLeftMenu.svelte';
	import TopRightMenu from '$lib/themes/svelte/carbon/Menu/TopRightMenu.svelte';
	import type { MenuLink } from '$lib/Menu';
	import { type AdminConfig, defaultAdminConfig } from '$lib/Config';
	import type { Writable } from 'svelte/store';

	let {
		left_links = [],
		right_links = [],
		is_side_menu_open,
		adminConfig = defaultAdminConfig()
	}: {
		left_links?: Array<MenuLink>;
		right_links?: Array<MenuLink>;
		is_side_menu_open: Writable<boolean>;
		adminConfig?: AdminConfig;
	} = $props();
</script>

<Header
	company={adminConfig?.head?.brandName || ''}
	platformName={adminConfig?.head?.appName || ''}
	bind:isSideNavOpen={$is_side_menu_open}
>
	{#snippet skipToContent()}
		<SkipToContent />
	{/snippet}

	<TopLeftMenu links={left_links} />
	{#if right_links.length}
		<TopRightMenu links={right_links} />
	{/if}
</Header>
