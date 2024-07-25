import { SvelteComponent } from "svelte";
import type { MenuLink } from '$lib/Menu';
import { type AdminConfig } from '$lib/Config';
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        left_links?: Array<MenuLink>;
        right_links?: Array<MenuLink>;
        is_side_menu_open: Writable<boolean>;
        adminConfig?: AdminConfig;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TopMenuProps = typeof __propDef.props;
export type TopMenuEvents = typeof __propDef.events;
export type TopMenuSlots = typeof __propDef.slots;
export default class TopMenu extends SvelteComponent<TopMenuProps, TopMenuEvents, TopMenuSlots> {
}
export {};
