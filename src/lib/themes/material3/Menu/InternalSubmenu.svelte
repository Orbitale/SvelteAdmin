<script lang="ts">
    import {Divider, type MenuLink, Submenu} from "$lib/Menu/MenuLinks.ts";
    import Menu from '@smui/menu';
    import IconButton from '@smui/icon-button/dist/IconButton.svelte';
    import Section from '@smui/top-app-bar/dist/Section.svelte';
    import List, {
        Item,
        Separator,
        Text,
        PrimaryText,
        SecondaryText,
    } from '@smui/list';
    import {_} from "svelte-i18n";
    import {CallbackAction, Icon, UrlAction} from "$lib";
    import Button, {Label} from "@smui/button";

    export let link: MenuLink;
    let submenu: Menu;
</script>

<Section toolbar>
    <IconButton class="material-icons" on:click={submenu.setOpen(true)}>menu</IconButton>
    <Menu bind:this={submenu}>
        {#if link.icon}
            <svelte:component this={link.icon} />
        {/if}
        <List twoLine>
            {#each link.links as submenuLink}
                {#if submenuLink instanceof Divider}
                    <br />
                {:else if submenuLink instanceof UrlAction}
                    <Section toolbar>
                        <a href={submenuLink.url()}>
                            {#if submenuLink.icon}
                                <Icon icon={submenuLink.icon} />
                            {/if}
                            {submenuLink.label ? $_(submenuLink.label) : ''}
                        </a>
                    </Section>
                {:else if submenuLink instanceof CallbackAction}
                    <Section toolbar>
                        <Button tag="span" type="button" on:click={() => submenuLink.call()}>
                            {#if submenuLink.icon}
                                <Icon icon={submenuLink.icon} />
                            {/if}
                            {submenuLink.label ? $_(submenuLink.label) : ''}
                        </Button>
                    </Section>
                {:else}
                    <Section toolbar>
                        {#if submenuLink.icon}
                            <Icon icon={submenuLink.icon} />
                        {/if}
                        <Label>{submenuLink.label ? $_(submenuLink.label) : ''}</Label>
                    </Section>
                {/if}
            {/each}
        </List>
    </Menu>

</Section>
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
