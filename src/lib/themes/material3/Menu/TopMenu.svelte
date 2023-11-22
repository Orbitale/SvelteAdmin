<script lang="ts">
	import TopAppBar from '@smui/top-app-bar/dist/TopAppBar.svelte';
	import '@smui/top-app-bar/bare.css';
	import { Row, Title } from '@smui/top-app-bar';
	import Section from '@smui/top-app-bar/dist/Section.svelte';

	import type { MenuLink } from '$lib/Menu/MenuLinks';
	import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';
	import TopLeftMenu from './TopLeftMenu.svelte';
	import TopRightMenu from './TopRightMenu.svelte';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<MenuLink> = [];

	export let adminConfig: AdminConfig = emptyAdminConfig();

	import { sideMenuOpen } from '$lib/Menu/stores';
</script>

<TopAppBar variant="static" dense={true} color="primary">
	<Row>
		<Section align="start">
			{#if adminConfig?.head?.brandName}
				<Title>{adminConfig.head.brandName}</Title>
			{/if}
			{#if adminConfig?.head?.appName}
				<Title><small>{adminConfig.head.appName}</small></Title>
			{/if}
		</Section>
		<TopLeftMenu links={left_links} />
		<Section align="end">
			{#if right_links.length}
				<TopRightMenu links={right_links} />
			{/if}
		</Section>
	</Row>
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
