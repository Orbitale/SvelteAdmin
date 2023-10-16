<script lang="ts">
	import Header from 'carbon-components-svelte/src/UIShell/Header.svelte';
	import SkipToContent from 'carbon-components-svelte/src/UIShell/SkipToContent.svelte';

	import TopLeftMenu from '$lib/admin/Menu/TopLeftMenu.svelte';
	import TopRightMenu from '$lib/admin/Menu/TopRightMenu.svelte';
	import type { MenuLink } from '$lib/admin/Menu/MenuLinks.ts';
	import { type AdminConfig, emptyAdminConfig } from '$lib/admin/config/adminConfig.ts';

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
