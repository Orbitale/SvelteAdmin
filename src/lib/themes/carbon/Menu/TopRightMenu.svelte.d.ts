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
export type TopRightMenuProps = typeof __propDef.props;
export type TopRightMenuEvents = typeof __propDef.events;
export type TopRightMenuSlots = typeof __propDef.slots;
export default class TopRightMenu extends SvelteComponent<TopRightMenuProps, TopRightMenuEvents, TopRightMenuSlots> {
}
export {};
