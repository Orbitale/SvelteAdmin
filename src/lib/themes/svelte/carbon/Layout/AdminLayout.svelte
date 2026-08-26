<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import Content from 'carbon-components-svelte/src/UIShell/Content.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import { getLocaleFromNavigator } from 'svelte-i18n';

	import TopMenu from '../Menu/TopMenu.svelte';
	import SideMenu from '../Menu/SideMenu.svelte';
	import type { MenuLink } from '$lib/Menu';
	import { type Dictionaries, initLocale } from '$lib/i18n';
	import type { AdminConfig } from '$lib/Config';
	import { writable, type Writable } from 'svelte/store';

	let {
		theme = 'g10',
		adminConfig = {},
		translations = {},
		side_menu_links = [],
		top_left_menu_links = [],
		top_right_menu_links = [],
		top_menu,
		side_menu,
		children
	}: {
		// Available Carbon themes: "white" | "g10" | "g80" | "g90" | "g100"
		theme?: string;
		adminConfig?: AdminConfig;
		translations?: Dictionaries;
		side_menu_links?: Array<MenuLink>;
		top_left_menu_links?: Array<MenuLink>;
		top_right_menu_links?: Array<MenuLink>;
		top_menu?: Snippet;
		side_menu?: Snippet;
		children?: Snippet;
	} = $props();

	const is_side_menu_open: Writable<boolean> = writable(false);

	initLocale(adminConfig?.defaultLocale || getLocaleFromNavigator() || 'en', translations);

	onMount(() => {
		document.documentElement.setAttribute('theme', theme);
	});
</script>

<div id="toast_container">
	<SvelteToast />
</div>

{#if top_menu}
	{@render top_menu()}
{:else}
	<TopMenu
		{is_side_menu_open}
		{adminConfig}
		left_links={top_left_menu_links}
		right_links={top_right_menu_links}
	/>
{/if}

{#if side_menu}
	{@render side_menu()}
{:else}
	{#if side_menu_links.length}
		<SideMenu links={side_menu_links} {is_side_menu_open} />
	{/if}
{/if}

<Content>
	{@render children?.()}
</Content>
