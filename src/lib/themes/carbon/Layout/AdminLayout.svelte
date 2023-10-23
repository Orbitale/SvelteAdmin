<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import Content from 'carbon-components-svelte/src/UIShell/Content.svelte';
	import { onMount } from 'svelte';
	import { getLocaleFromNavigator } from 'svelte-i18n';

	import TopMenu from '../Menu/TopMenu.svelte';
	import SideMenu from '../Menu/SideMenu.svelte';
	import type { MenuLink } from '$lib/Menu/MenuLinks';

	import { type Dictionaries, initLocale } from '$lib/admin_i18n';
	import type { AdminConfig } from '$lib/config/adminConfig';

	// Available Carbon themes: "white" | "g10" | "g80" | "g90" | "g100"
	export let theme = 'g10';

	export let adminConfig: AdminConfig = {};

	export let translations: Dictionaries = {};

	export let side_menu_links: Array<MenuLink> = [];
	export let top_left_menu_links: Array<MenuLink> = [];
	export let top_right_menu_links: Array<MenuLink> = [];

	initLocale(adminConfig?.defaultLocale || getLocaleFromNavigator() || 'en', translations);

	onMount(() => {
		document.documentElement.setAttribute('theme', theme);
	});
</script>

<slot name="top_menu">
	<TopMenu {adminConfig} left_links={top_left_menu_links} right_links={top_right_menu_links} />
</slot>

<slot name="side_menu">
	{#if side_menu_links.length}
		<SideMenu links={side_menu_links} />
	{/if}
</slot>

<Content>
	<slot />
</Content>
