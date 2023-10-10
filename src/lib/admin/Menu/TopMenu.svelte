<script lang="ts">
	import { Header, SkipToContent } from 'carbon-components-svelte';
	import TopLeftMenu from './TopLeftMenu.svelte';
	import TopRightMenu from './TopRightMenu.svelte';
	import type { MenuLink } from './MenuLinks';
	import { type AdminConfig, emptyAdminConfig } from '../config/adminConfig.ts';

	export let left_links: Array<MenuLink> = [];
	export let right_links: Array<MenuLink> = [];

	export let adminConfig: AdminConfig = emptyAdminConfig();
</script>

<Header company={adminConfig.head.brandName} platformName={adminConfig.head.appName}>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<TopLeftMenu links={left_links} />
	{#if right_links.length}
		<TopRightMenu links={right_links} />
	{/if}
</Header>
