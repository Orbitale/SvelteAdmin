import { SvelteComponent } from "svelte";
import type { CrudOperation } from '$lib/Crud/Operations';
import type { CrudDefinition } from '$lib/Crud';
import type { DashboardDefinition } from '$lib/Dashboard';
import type { RequestParameters } from '$lib/Request';
declare const __propDef: {
    props: {
        dashboard: DashboardDefinition;
        operation: CrudOperation;
        crud: CrudDefinition<unknown>;
        requestParameters?: RequestParameters;
    };
    events: {
        click: any;
        keydown: any;
        mouseover: any;
        mouseenter: any;
        mouseleave: any;
        submit: any;
        submitData: CustomEvent<import("../../../lib").SubmittedData>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudNewProps = typeof __propDef.props;
export type CrudNewEvents = typeof __propDef.events;
export type CrudNewSlots = typeof __propDef.slots;
export default class CrudNew extends SvelteComponent<CrudNewProps, CrudNewEvents, CrudNewSlots> {
}
export {};
