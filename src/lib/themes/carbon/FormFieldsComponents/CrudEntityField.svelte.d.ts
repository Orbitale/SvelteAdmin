import { SvelteComponent } from "svelte";
import { type CrudOperation } from '$lib/Crud/Operations';
declare const __propDef: {
    props: {
        field: CrudEntityField;
        operation: CrudOperation;
        value: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudEntityFieldProps = typeof __propDef.props;
export type CrudEntityFieldEvents = typeof __propDef.events;
export type CrudEntityFieldSlots = typeof __propDef.slots;
export default class CrudEntityField extends SvelteComponent<CrudEntityFieldProps, CrudEntityFieldEvents, CrudEntityFieldSlots> {
}
export {};
