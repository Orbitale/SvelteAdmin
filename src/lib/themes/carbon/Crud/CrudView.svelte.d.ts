import { SvelteComponent } from "svelte";
import type { CrudDefinition } from '$lib/Crud';
import type { DashboardDefinition } from '$lib/Dashboard';
import type { CrudOperation } from '$lib/Crud/Operations';
import type { RequestParameters } from '$lib/Request';
declare const __propDef: {
    props: {
        dashboard: DashboardDefinition;
        operation: CrudOperation;
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
export type CrudViewProps = typeof __propDef.props;
export type CrudViewEvents = typeof __propDef.events;
export type CrudViewSlots = typeof __propDef.slots;
export default class CrudView extends SvelteComponent<CrudViewProps, CrudViewEvents, CrudViewSlots> {
}
export {};
