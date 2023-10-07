<script lang="ts">
    import {SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink, SideNavDivider} from "carbon-components-svelte";
    import {_} from "svelte-i18n";
    import {Folder, Link} from "carbon-icons-svelte";

    import {Divider, Submenu} from "./MenuLinks";
    import {type Action, CallbackAction, UrlAction} from "../actions";

    export let links: Array<Action> = [];
</script>

<SideNav isOpen={true} fixed={true}>
    <SideNavItems>
        {#each links as link}
            {#if link instanceof Submenu}
                <SideNavMenu icon={link.icon || Folder} text={link.label ? $_(link.label) : null}>
                    {#each link.links as subLink}
                        {#if subLink instanceof Divider}
                            <br>
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
                <SideNavDivider/>
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
