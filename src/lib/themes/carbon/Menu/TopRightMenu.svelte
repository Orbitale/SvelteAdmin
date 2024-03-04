<script lang="ts">
	import { _ } from 'svelte-i18n';
	import HeaderAction from 'carbon-components-svelte/src/UIShell/HeaderAction.svelte';
	import HeaderPanelDivider from 'carbon-components-svelte/src/UIShell/HeaderPanelDivider.svelte';
	import HeaderPanelLink from 'carbon-components-svelte/src/UIShell/HeaderPanelLink.svelte';
	import HeaderPanelLinks from 'carbon-components-svelte/src/UIShell/HeaderPanelLinks.svelte';
	import HeaderUtilities from 'carbon-components-svelte/src/UIShell/HeaderUtilities.svelte';
	import HeaderGlobalAction from 'carbon-components-svelte/src/UIShell/HeaderGlobalAction.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import TooltipDefinition from 'carbon-components-svelte/src/TooltipDefinition/TooltipDefinition.svelte';

	import Link from 'carbon-icons-svelte/lib/Link.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';

	import Icon from '$lib/Layout/Icon.svelte';

	import { Divider, type MenuLink, Submenu } from '$lib/Menu';
	import { CallbackAction, UrlAction } from '$lib/Actions';

	export let links: Array<MenuLink> = [];
</script>

<HeaderUtilities>
	{#each links as link (link)}
		{#if link instanceof Submenu}
			<HeaderAction
				icon={link.icon ?? Menu}
				text={link.options.isOpen ? link.label : null}
				bind:isOpen={link.options.isOpen}
				on:open={() => links.filter((s) => s !== link).forEach((s) => (s.options.isOpen = false))}
			>
				<HeaderPanelLinks>
					{#each link.links as subLink}
						{#if subLink instanceof Divider}
							<br />
						{:else if subLink instanceof UrlAction}
							<HeaderPanelLink href={subLink.url()} {...link.options.htmlAttributes}>
								<Icon icon={subLink.icon ? subLink.icon : ''} />
								{subLink.label ? $_(subLink.label) : ''}
							</HeaderPanelLink>
						{:else if subLink instanceof CallbackAction}
							<HeaderPanelLink on:click={() => subLink.call()} {...link.options.htmlAttributes}>
								<Icon icon={subLink.icon ? subLink.icon : ''} />
								{subLink.label ? $_(subLink.label) : ''}
							</HeaderPanelLink>
						{:else}
							<HeaderPanelLink icon={subLink.icon || Link} {...link.options.htmlAttributes}>
								{subLink.label ? $_(subLink.label) : ''}
							</HeaderPanelLink>
						{/if}
					{/each}
				</HeaderPanelLinks>
			</HeaderAction>
		{:else if link instanceof Divider}
			<HeaderPanelDivider>{link.label ? $_(link.label) : ''}</HeaderPanelDivider>
		{:else if link instanceof UrlAction}
			<TooltipDefinition tooltipText={link.label ? $_(link.label) : ''}>
				<HeaderGlobalAction
					on:click={function () {
						this.querySelector('a').click();
					}}
					on:mouseenter={() => (link.options.isOpen = true)}
					on:mouseleave={() => (link.options.isOpen = false)}
					{...link.options.htmlAttributes}
				>
					<a href={link.url()} style="color: var(--cds-icon-on-color);">
						<Icon icon={link.icon || Link} size={20} style="fill: var(--cds-icon-on-color);" />
					</a>
				</HeaderGlobalAction>
			</TooltipDefinition>
		{:else if link instanceof CallbackAction}
			<TooltipDefinition tooltipText={link.label ? $_(link.label) : ''}>
				<HeaderGlobalAction
					on:click={() => link.call()}
					on:mouseenter={() => (link.options.isOpen = true)}
					on:mouseleave={() => (link.options.isOpen = false)}
					{...link.options.htmlAttributes}
				>
					<Icon icon={link.icon || Link} size={20} style="fill: var(--cds-icon-on-color);" />
				</HeaderGlobalAction>
			</TooltipDefinition>
		{:else}
			<TooltipDefinition tooltipText={link.label ? $_(link.label) : ''}>
				<HeaderGlobalAction
					on:mouseenter={() => (link.options.isOpen = true)}
					on:mouseleave={() => (link.options.isOpen = false)}
					{...link.options.htmlAttributes}
				></HeaderGlobalAction>
			</TooltipDefinition>
		{/if}
	{/each}
</HeaderUtilities>
