<script lang="ts">
	import TopAppBar from '@smui/top-app-bar/dist/TopAppBar.svelte';
	import '@smui/top-app-bar/bare.css';
	import { Row, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button/dist/IconButton.svelte';
	import Section from '@smui/top-app-bar/dist/Section.svelte';

	import type { MenuLink } from '$lib/Menu/MenuLinks';
	import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';
	import TopLeftMenu from './TopLeftMenu.svelte';
	import TopRightMenu from './TopRightMenu.svelte';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<MenuLink> = [];

	export let adminConfig: AdminConfig = emptyAdminConfig();

	import Menu from "@smui/menu";
	import List from "@smui/list";
	import {onMount} from "svelte";

	let isRightMenuOpen: boolean;
	let leftMenuIcon: string = '';
	let rightMenu: Menu;

	$: {
		leftMenuIcon = isRightMenuOpen ? 'apps' : 'apps';
	}
	onMount(() => {
		rightMenu.setOpen(true);
	})
</script>

<TopAppBar variant="static" dense={true} color="primary">
	<Row>
		<Section>
			{#if adminConfig?.head?.brandName}
				<Title>{adminConfig.head.brandName}</Title>
			{/if}
			{#if adminConfig?.head?.appName}
				<Title><small>{adminConfig.head.appName}</small></Title>
			{/if}
			{#if left_links.length}
				<TopLeftMenu links={left_links} />
			{/if}
		</Section>
		{#if right_links.length}
			<Section align="end" toolbar>
				<TopRightMenu links={right_links} />
			</Section>
		{/if}
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
