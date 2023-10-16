<script lang="ts">
	import HeaderNav from 'carbon-components-svelte/src/UIShell/HeaderNav.svelte';
	import HeaderNavItem from 'carbon-components-svelte/src/UIShell/HeaderNavItem.svelte';
	import HeaderNavMenu from 'carbon-components-svelte/src/UIShell/HeaderNavMenu.svelte';
	import { _ } from 'svelte-i18n';
	import Folder from 'carbon-icons-svelte/lib/Folder.svelte';
	import Link from 'carbon-icons-svelte/lib/Link.svelte';

	import { Divider, type MenuLink, Submenu } from '$lib/admin/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/admin/actions';

	export let links: Array<MenuLink> = [];
</script>

<HeaderNav>
	{#each links as link}
		{#if link instanceof Submenu}
			<HeaderNavMenu icon={link.icon || Folder} text={link.label ? $_(link.label) : null}>
				{#each link.links as subLink}
					{#if subLink instanceof Divider}
						<br />
					{:else if subLink instanceof UrlAction}
						<HeaderNavItem icon={subLink.icon || Link} href={subLink.url()}>
							{subLink.label ? $_(subLink.label) : ''}
						</HeaderNavItem>
					{:else if subLink instanceof CallbackAction}
						<HeaderNavItem icon={subLink.icon || Link} on:click={() => subLink.call()}>
							{subLink.label ? $_(subLink.label) : ''}
						</HeaderNavItem>
					{:else}
						<HeaderNavItem icon={subLink.icon || Link}>
							{subLink.label ? $_(subLink.label) : ''}
						</HeaderNavItem>
					{/if}
				{/each}
			</HeaderNavMenu>
		{:else if link instanceof Divider}
			<br />
		{:else if link instanceof UrlAction}
			<HeaderNavItem icon={link.icon || Link} href={link.url()}>
				{link.label ? $_(link.label) : ''}
			</HeaderNavItem>
		{:else if link instanceof CallbackAction}
			<HeaderNavItem icon={link.icon || Link} on:click={() => link.call()}>
				{link.label ? $_(link.label) : ''}
			</HeaderNavItem>
		{:else}
			<HeaderNavItem icon={link.icon || Link}>
				{link.label ? $_(link.label) : ''}
			</HeaderNavItem>
		{/if}
	{/each}
</HeaderNav>
