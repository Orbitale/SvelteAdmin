<script lang="ts">
	import SideNav from 'carbon-components-svelte/src/UIShell/SideNav.svelte';
	import SideNavItems from 'carbon-components-svelte/src/UIShell/SideNavItems.svelte';
	import SideNavMenu from 'carbon-components-svelte/src/UIShell/SideNavMenu.svelte';
	import SideNavMenuItem from 'carbon-components-svelte/src/UIShell/SideNavMenuItem.svelte';
	import SideNavLink from 'carbon-components-svelte/src/UIShell/SideNavLink.svelte';
	import SideNavDivider from 'carbon-components-svelte/src/UIShell/SideNavDivider.svelte';

	import Folder from 'carbon-icons-svelte/lib/Folder.svelte';
	import Link from 'carbon-icons-svelte/lib/Link.svelte';

	import { _ } from 'svelte-i18n';

	import { Divider, Submenu } from '$lib/Menu/MenuLinks.ts';
	import { type Action, CallbackAction, UrlAction } from '$lib/actions.ts';

	export let links: Array<Action> = [];
</script>

<SideNav isOpen={true} fixed={true}>
	<SideNavItems>
		{#each links as link}
			{#if link instanceof Submenu}
				<SideNavMenu icon={link.icon || Folder} text={link.label ? $_(link.label) : null}>
					{#each link.links as subLink}
						{#if subLink instanceof Divider}
							<br />
						{:else if subLink instanceof UrlAction}
							<SideNavMenuItem icon={subLink.icon || Link} href={subLink.url()}>
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{:else if subLink instanceof CallbackAction}
							<SideNavMenuItem icon={subLink.icon || Link} on:click={() => subLink.call()}>
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{:else}
							<SideNavMenuItem icon={subLink.icon || Link}>
								{subLink.label ? $_(subLink.label) : ''}
							</SideNavMenuItem>
						{/if}
					{/each}
				</SideNavMenu>
			{:else if link instanceof Divider}
				<SideNavDivider />
			{:else if link instanceof UrlAction}
				<SideNavLink icon={link.icon || Link} href={link.url()}>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{:else if link instanceof CallbackAction}
				<SideNavLink icon={link.icon || Link} on:click={() => link.call()}>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{:else}
				<SideNavLink icon={link.icon || Link}>
					{link.label ? $_(link.label) : ''}
				</SideNavLink>
			{/if}
		{/each}
	</SideNavItems>
</SideNav>
