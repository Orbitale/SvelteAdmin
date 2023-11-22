<script lang="ts">
	import Menu from '@smui/menu';
	import IconButton from '@smui/icon-button/dist/IconButton.svelte';
	import List, { Item, Separator } from '@smui/list';
	import { _ } from 'svelte-i18n';
	import Button, { Label } from '@smui/button';

	import { Divider, type MenuLink } from '$lib/Menu/MenuLinks.ts';
	import { CallbackAction, Icon, UrlAction } from '$lib';

	export let link: MenuLink;
	let submenu: Menu;

	let isOpen: boolean;
	let icon: string = '';

	$: {
		icon = isOpen ? 'arrow_drop_up' : 'arrow_drop_down';
	}
</script>

<IconButton class="material-icons" on:click={submenu.setOpen(true)}>{icon}</IconButton>
<Menu bind:this={submenu} bind:open={isOpen} anchorCorner="BOTTOM_LEFT">
	{#if link.icon}
		<svelte:component this={link.icon} />
	{/if}
	<List dense>
		{#each link.links as submenuLink}
			{#if submenuLink instanceof Divider}
				<Separator />
			{:else if submenuLink instanceof UrlAction}
				<Item>
					<a href={submenuLink.url()}>
						{#if submenuLink.icon}
							<Icon icon={submenuLink.icon} />
						{/if}
						{submenuLink.label ? $_(submenuLink.label) : ''}
					</a>
				</Item>
			{:else if submenuLink instanceof CallbackAction}
				<Item>
					<Button tag="span" type="button" on:click={() => submenuLink.call()}>
						{#if submenuLink.icon}
							<Icon icon={submenuLink.icon} />
						{/if}
						{submenuLink.label ? $_(submenuLink.label) : ''}
					</Button>
				</Item>
			{:else}
				<Item>
					{#if submenuLink.icon}
						<Icon icon={submenuLink.icon} />
					{/if}
					<Label>{submenuLink.label ? $_(submenuLink.label) : ''}</Label>
				</Item>
			{/if}
		{/each}
	</List>
</Menu>

<!--

<HeaderNavMenu icon={link.icon || Folder} text={link.label ? $_(link.label) : ''}>
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

-->
