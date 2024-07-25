import { SvelteComponent } from "svelte";
import type { CrudDefinition } from '$lib/Crud';
import { type CrudOperation } from '$lib/Crud/Operations';
import type { RequestParameters } from '$lib/Request';
declare const __propDef: {
    props: {
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
export type CrudDeleteProps = typeof __propDef.props;
export type CrudDeleteEvents = typeof __propDef.events;
export type CrudDeleteSlots = typeof __propDef.slots;
export default class CrudDelete extends SvelteComponent<CrudDeleteProps, CrudDeleteEvents, CrudDeleteSlots> {
}
export {};
