<script lang="ts">
	import { _ } from 'svelte-i18n';
	import HeaderAction from 'carbon-components-svelte/src/UIShell/HeaderAction.svelte';
	import HeaderPanelDivider from 'carbon-components-svelte/src/UIShell/HeaderPanelDivider.svelte';
	import HeaderPanelLink from 'carbon-components-svelte/src/UIShell/HeaderPanelLink.svelte';
	import HeaderPanelLinks from 'carbon-components-svelte/src/UIShell/HeaderPanelLinks.svelte';
	import HeaderUtilities from 'carbon-components-svelte/src/UIShell/HeaderUtilities.svelte';

	import Link from 'carbon-icons-svelte/lib/Link.svelte';

	import { Divider, type itemMenuLinks, Submenu } from '$lib/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import { Help, Switcher } from 'carbon-icons-svelte';

	export let items: Array<itemMenuLinks> = [];
	console.log(items);
	for (let i = 0; i < items.length; i++) {
		// Ajoutez un nouvel attribut à chaque objet
		items[i].isOpen = false;
	}

</script>

<HeaderUtilities>

	{#each items as item}
		<HeaderAction
			icon={item.icon ?? Switcher}
			closeIcon={item.icon ?? Switcher}
			bind:isOpen={item.isOpen}
		>
			<HeaderPanelLinks>
				{#each item.links as link}
					{#if link instanceof Submenu}
						<HeaderPanelDivider>{link.label ? $_(link.label) : ''}</HeaderPanelDivider>
						{#each link.links as subLink}
							{#if subLink instanceof Divider}
								<br />
							{:else if subLink instanceof UrlAction}
								<HeaderPanelLink href={subLink.url()} {...link.options.htmlAttributes}>
									{subLink.icon ? subLink.icon : ''}
									{subLink.label ? $_(subLink.label) : ''}
								</HeaderPanelLink>
							{:else if subLink instanceof CallbackAction}
								<HeaderPanelLink on:click={() => subLink.call()} {...link.options.htmlAttributes}>
									{subLink.icon ? subLink.icon : ''}
									{subLink.label ? $_(subLink.label) : ''}
								</HeaderPanelLink>
							{:else}
								<HeaderPanelLink icon={subLink.icon || Link} {...link.options.htmlAttributes}>
									{subLink.label ? $_(subLink.label) : ''}
								</HeaderPanelLink>
							{/if}
						{/each}
					{:else if link instanceof Divider}
						<HeaderPanelDivider>{link.label ? $_(link.label) : ''}</HeaderPanelDivider>
					{:else if link instanceof UrlAction}
						<HeaderPanelLink href={link.url()} {...link.options.htmlAttributes}>
							{link.icon ? link.icon : ''}
							{link.label ? $_(link.label) : ''}
						</HeaderPanelLink>
					{:else if link instanceof CallbackAction}
						<HeaderPanelLink on:click={() => link.call()} {...link.options.htmlAttributes}>
							{link.icon ? link.icon : ''}
							{link.label ? $_(link.label) : ''}
						</HeaderPanelLink>
					{:else}
						<HeaderPanelLink {...link.options.htmlAttributes}>
							{link.icon ? link.icon : ''}
							{link.label ? $_(link.label) : ''}
						</HeaderPanelLink>
					{/if}
				{/each}
			</HeaderPanelLinks>
		</HeaderAction>
	{/each}
</HeaderUtilities>
