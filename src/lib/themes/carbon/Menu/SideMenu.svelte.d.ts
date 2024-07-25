import { SvelteComponent } from "svelte";
import type { Writable } from 'svelte/store';
import { type Action } from '$lib/Actions';
declare const __propDef: {
    props: {
        autoClose?: boolean;
        is_side_menu_open: Writable<boolean>;
        links?: Array<Action>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SideMenuProps = typeof __propDef.props;
export type SideMenuEvents = typeof __propDef.events;
export type SideMenuSlots = typeof __propDef.slots;
export default class SideMenu extends SvelteComponent<SideMenuProps, SideMenuEvents, SideMenuSlots> {
}
export {};
