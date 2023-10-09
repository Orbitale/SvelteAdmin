<script lang="ts">
    import {Header, SkipToContent} from "carbon-components-svelte";
    import TopLeftMenu from "./TopLeftMenu.svelte";
    import TopRightMenu from "./TopRightMenu.svelte";
    import type {MenuLink} from "./MenuLinks";
    import {configStore} from "../config/stores";

    export let left_links: Array<MenuLink> = [];
    export let right_links: Array<MenuLink> = [];
</script>

<Header company="{$configStore.head.brandName}" platformName="{$configStore.head.appName}">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent/>
    </svelte:fragment>

    <TopLeftMenu links={left_links} />
    {#if right_links.length}
        <TopRightMenu links={right_links} />
    {/if}
</Header>
