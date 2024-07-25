import { SvelteComponent } from "svelte";
import type { CrudDefinition } from '$lib/Crud';
import { List } from '$lib/Crud/Operations';
import { type DashboardDefinition } from '$lib/Dashboard';
import type { RequestParameters } from '$lib/Request';
declare const __propDef: {
    props: {
        dashboard: DashboardDefinition;
        operation: typeof List;
        crud: CrudDefinition<unknown>;
        requestParameters?: RequestParameters;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudListProps = typeof __propDef.props;
export type CrudListEvents = typeof __propDef.events;
export type CrudListSlots = typeof __propDef.slots;
export default class CrudList extends SvelteComponent<CrudListProps, CrudListEvents, CrudListSlots> {
}
export {};
