<script lang="ts">
	import Header from 'carbon-components-svelte/src/UIShell/Header.svelte';
	import SkipToContent from 'carbon-components-svelte/src/UIShell/SkipToContent.svelte';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	import TopLeftMenu from '$lib/themes/material3/Menu/TopLeftMenu.svelte';
	import TopRightMenu from '$lib/themes/material3/Menu/TopRightMenu.svelte';
	import type { MenuLink } from '$lib/Menu/MenuLinks';
	import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<MenuLink> = [];

	export let adminConfig: AdminConfig = emptyAdminConfig();

	import { sideMenuOpen } from '$lib/Menu/stores';

	let secondaryColor = false;
</script>
<TopAppBar
  variant="static"
  prominent={false}
  dense={true}
  color="primary"
>
    {#if adminConfig?.head?.brandName}
        {adminConfig.head.brandName}
    {/if}
</TopAppBar>
<!--<Header-->
<!--	company={adminConfig?.head?.brandName || ''}-->
<!--	platformName={adminConfig?.head?.appName || ''}-->
<!--	bind:isSideNavOpen={$sideMenuOpen}-->
<!--&gt;-->
<!--	<svelte:fragment slot="skip-to-content">-->
<!--		<SkipToContent />-->
<!--	</svelte:fragment>-->

<!--	<TopLeftMenu links={left_links} />-->
<!--	{#if right_links.length}-->
<!--		<TopRightMenu links={right_links} />-->
<!--	{/if}-->
<!--</Header>-->
