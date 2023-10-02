<script lang="ts">
    import {_} from "svelte-i18n";
    import {HeaderAction, HeaderPanelDivider, HeaderPanelLink, HeaderPanelLinks, HeaderUtilities} from "carbon-components-svelte";
    import {Link} from "carbon-icons-svelte";

    import {Divider, type MenuLink, Submenu} from "./MenuLinks";
    import {CallbackAction, UrlAction} from "../actions";

    export let links: Array<MenuLink> = [];
</script>

<HeaderUtilities>
    <HeaderAction>
        <HeaderPanelLinks>

            {#each links as link}
                {#if link instanceof Submenu}
                    <HeaderPanelDivider>{link.label ? $_(link.label) : ''}</HeaderPanelDivider>
                    {#each link.links as subLink}
                        {#if subLink instanceof Divider}
                            <br/>
                        {:else if subLink instanceof UrlAction}
                            <HeaderPanelLink href={subLink.url()}>
                                {subLink.icon ? subLink.icon : ''}
                                {subLink.label ? $_(subLink.label) : ''}
                            </HeaderPanelLink>
                        {:else if subLink instanceof CallbackAction}
                            <HeaderPanelLink on:click={() => subLink.call()}>
                                {subLink.icon ? subLink.icon : ''}
                                {subLink.label ? $_(subLink.label) : ''}
                            </HeaderPanelLink>
                        {:else}
                            <HeaderPanelLink icon={subLink.icon || Link}>
                                {subLink.label ? $_(subLink.label) : ''}
                            </HeaderPanelLink>
                        {/if}
                    {/each}
                {:else if link instanceof Divider}
                    <HeaderPanelDivider>{link.label ? $_(link.label) : ''}</HeaderPanelDivider>
                {:else if link instanceof UrlAction}
                    <HeaderPanelLink href={link.url()}>
                        {link.icon ? link.icon : ''}
                        {link.label ? $_(link.label) : ''}
                    </HeaderPanelLink>
                {:else if link instanceof CallbackAction}
                    <HeaderPanelLink on:click={() => link.call()}>
                        {link.icon ? link.icon : ''}
                        {link.label ? $_(link.label) : ''}
                    </HeaderPanelLink>
                {:else}
                    <HeaderPanelLink>
                        {link.icon ? link.icon : ''}
                        {link.label ? $_(link.label) : ''}
                    </HeaderPanelLink>
                {/if}
            {/each}
        </HeaderPanelLinks>
    </HeaderAction>
</HeaderUtilities>
