import { SvelteComponent } from "svelte";
import 'carbon-components-svelte/css/all.css';
import type { MenuLink } from '$lib/Menu';
import { type Dictionaries } from '$lib/i18n';
import type { AdminConfig } from '$lib/Config';
declare const __propDef: {
    props: {
        theme?: string;
        adminConfig?: AdminConfig;
        translations?: Dictionaries;
        side_menu_links?: Array<MenuLink>;
        top_left_menu_links?: Array<MenuLink>;
        top_right_menu_links?: Array<MenuLink>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        top_menu: {};
        side_menu: {};
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AdminLayoutProps = typeof __propDef.props;
export type AdminLayoutEvents = typeof __propDef.events;
export type AdminLayoutSlots = typeof __propDef.slots;
export default class AdminLayout extends SvelteComponent<AdminLayoutProps, AdminLayoutEvents, AdminLayoutSlots> {
}
export {};
