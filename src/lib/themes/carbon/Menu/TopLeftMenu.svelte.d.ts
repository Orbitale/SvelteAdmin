import { SvelteComponent } from "svelte";
import { type MenuLink } from '$lib/Menu';
declare const __propDef: {
    props: {
        links?: Array<MenuLink>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TopLeftMenuProps = typeof __propDef.props;
export type TopLeftMenuEvents = typeof __propDef.events;
export type TopLeftMenuSlots = typeof __propDef.slots;
export default class TopLeftMenu extends SvelteComponent<TopLeftMenuProps, TopLeftMenuEvents, TopLeftMenuSlots> {
}
export {};
