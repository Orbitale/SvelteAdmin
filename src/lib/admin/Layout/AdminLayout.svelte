<script lang="ts">
    import 'carbon-components-svelte/css/all.css';
    import {Content} from "carbon-components-svelte";
    import {onMount} from "svelte";

    import TopMenu from "../Menu/TopMenu.svelte";
    import SideMenu from '../Menu/SideMenu.svelte';
    import type { MenuLink } from '../Menu/MenuLinks';

    import fr from '../translations/fr';
    import en from '../translations/en';
    import {type Dictionaries, initLocale} from '../admin_i18n';

    // Available Carbon themes: "white" | "g10" | "g80" | "g90" | "g100"
    export let theme = 'g10';

    export let locale = 'fr';
    export let locales = ['en', 'fr'];
    export let translations: Dictionaries = {};

    export let side_menu_links: Array<MenuLink> = [];
    export let top_left_menu_links: Array<MenuLink> = [];
    export let top_right_menu_links: Array<MenuLink> = [];

    initLocale(locale, locales, translations);

    onMount(() => {
        document.documentElement.setAttribute("theme", theme);
    });
</script>

<slot name="top_menu">
    <TopMenu left_links={top_left_menu_links} right_links={top_right_menu_links} />
</slot>

<slot name="side_menu">
    {#if side_menu_links.length}
        <SideMenu links={side_menu_links} />
    {/if}
</slot>

<Content>
    <slot></slot>
</Content>
