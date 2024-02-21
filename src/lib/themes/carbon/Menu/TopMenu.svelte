<script lang="ts">
	import Header from 'carbon-components-svelte/src/UIShell/Header.svelte';
	import SkipToContent from 'carbon-components-svelte/src/UIShell/SkipToContent.svelte';

	import TopLeftMenu from '$lib/themes/carbon/Menu/TopLeftMenu.svelte';
	import TopRightMenu from '$lib/themes/carbon/Menu/TopRightMenu.svelte';
	import type { itemMenuLinks, MenuLink } from '$lib/Menu/MenuLinks';
	import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<itemMenuLinks> = [];

	export let adminConfig: AdminConfig = emptyAdminConfig();

	import { sideMenuOpen } from '$lib/Menu/stores';
</script>

<Header
	company={adminConfig?.head?.brandName || ''}
	platformName={adminConfig?.head?.appName || ''}
	bind:isSideNavOpen={$sideMenuOpen}
>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<TopLeftMenu links={left_links} />
	{#if right_links.length}
		<TopRightMenu items={right_links} />
	{/if}
</Header>
