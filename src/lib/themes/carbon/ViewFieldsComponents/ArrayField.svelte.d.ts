import { SvelteComponent } from "svelte";
import type { CrudOperation } from '$lib/Crud/Operations';
import type { FieldInterface } from '$lib/Fields';
import type { FieldOptions } from '$lib/Fields';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        field: ArrayField<FieldInterface<FieldOptions>>;
        value: Array<unknown> | undefined;
        operation: CrudOperation;
        entityObject?: Record<string, unknown>;
        theme: ThemeConfig;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ArrayFieldProps = typeof __propDef.props;
export type ArrayFieldEvents = typeof __propDef.events;
export type ArrayFieldSlots = typeof __propDef.slots;
export default class ArrayField extends SvelteComponent<ArrayFieldProps, ArrayFieldEvents, ArrayFieldSlots> {
}
export {};
