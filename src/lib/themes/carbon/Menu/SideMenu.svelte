<script lang="ts">
	import SideNav from 'carbon-components-svelte/src/UIShell/SideNav.svelte';
	import SideNavItems from 'carbon-components-svelte/src/UIShell/SideNavItems.svelte';
	import SideNavMenu from 'carbon-components-svelte/src/UIShell/SideNavMenu.svelte';
	import SideNavMenuItem from 'carbon-components-svelte/src/UIShell/SideNavMenuItem.svelte';
	import SideNavLink from 'carbon-components-svelte/src/UIShell/SideNavLink.svelte';
	import SideNavDivider from 'carbon-components-svelte/src/UIShell/SideNavDivider.svelte';

	import Folder from 'carbon-icons-svelte/lib/Folder.svelte';
	import Link from 'carbon-icons-svelte/lib/Link.svelte';

	export let autoClose = true;

	import { _ } from 'svelte-i18n';

	import { Divider, Submenu } from '$lib/Menu';
	import { sideMenuOpen } from '$lib/stores';
	import { type Action, CallbackAction, UrlAction } from '$lib/Actions';
	import Icon from '$lib/Layout/Icon.svelte';

	export let links: Array<Action> = [];
</script>

<SideNav rail={autoClose} isOpen={$sideMenuOpen}>
	<SideNavItems>
		{#each links as link}
			{#if link instanceof Submenu}
				<SideNavMenu icon={link.icon || Folder} text={link.label ? $_(link.label) : ''}>
					{#each link.links as subLink}
						{#if subLink instanceof Divider}
							<br />
						{:else if subLink instanceof UrlAction}
							<SideNavMenuItem href={subLink.url()} {...link.options.htmlAttributes}>
								<Icon icon={subLink.icon} />
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{:else if subLink instanceof CallbackAction}
							<SideNavMenuItem on:click={() => subLink.call()} {...link.options.htmlAttributes}>
								<Icon icon={subLink.icon} />
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{:else}
							<SideNavMenuItem {...link.options.htmlAttributes}>
								<Icon icon={subLink.icon} />
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{/if}
					{/each}
				</SideNavMenu>
			{:else if link instanceof Divider}
				<SideNavDivider />
			{:else if link instanceof UrlAction}
				<SideNavLink icon={link.icon || Link} href={link.url()} {...link.options.htmlAttributes}>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{:else if link instanceof CallbackAction}
				<SideNavLink
					icon={link.icon || Link}
					on:click={() => link.call()}
					{...link.options.htmlAttributes}
				>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{:else}
				<SideNavLink icon={link.icon || Link} {...link.options.htmlAttributes}>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{/if}
		{/each}
	</SideNavItems>
</SideNav>
