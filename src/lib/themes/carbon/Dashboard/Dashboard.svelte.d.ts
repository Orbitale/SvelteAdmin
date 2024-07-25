import { SvelteComponent } from "svelte";
import type { DashboardDefinition } from '$lib/Dashboard';
import type { RequestParameters } from '$lib/Request';
declare const __propDef: {
    props: {
        dashboard: DashboardDefinition;
        crud?: string | undefined;
        operation?: string | undefined;
        requestParameters?: RequestParameters;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DashboardProps = typeof __propDef.props;
export type DashboardEvents = typeof __propDef.events;
export type DashboardSlots = typeof __propDef.slots;
export default class Dashboard extends SvelteComponent<DashboardProps, DashboardEvents, DashboardSlots> {
}
export {};
