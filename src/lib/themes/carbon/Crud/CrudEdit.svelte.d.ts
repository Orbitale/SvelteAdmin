import { SvelteComponent } from "svelte";
import type { CrudDefinition } from '$lib/Crud';
import type { CrudOperation } from '$lib/Crud/Operations';
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
        submitData: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudEditProps = typeof __propDef.props;
export type CrudEditEvents = typeof __propDef.events;
export type CrudEditSlots = typeof __propDef.slots;
export default class CrudEdit extends SvelteComponent<CrudEditProps, CrudEditEvents, CrudEditSlots> {
}
export {};
