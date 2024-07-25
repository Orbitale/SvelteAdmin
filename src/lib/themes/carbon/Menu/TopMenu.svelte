<script lang="ts">
	import Header from 'carbon-components-svelte/src/UIShell/Header.svelte';
	import SkipToContent from 'carbon-components-svelte/src/UIShell/SkipToContent.svelte';

	import TopLeftMenu from '$lib/themes/carbon/Menu/TopLeftMenu.svelte';
	import TopRightMenu from '$lib/themes/carbon/Menu/TopRightMenu.svelte';
	import type { MenuLink } from '$lib/Menu';
	import { type AdminConfig, defaultAdminConfig } from '$lib/Config';
	import type { Writable } from 'svelte/store';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<MenuLink> = [];
	export let is_side_menu_open: Writable<boolean>;

	export let adminConfig: AdminConfig = defaultAdminConfig();
</script>

<Header
	company={adminConfig?.head?.brandName || ''}
	platformName={adminConfig?.head?.appName || ''}
	bind:isSideNavOpen={$is_side_menu_open}
>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<TopLeftMenu links={left_links} />
	{#if right_links.length}
		<TopRightMenu links={right_links} />
	{/if}
</Header>
