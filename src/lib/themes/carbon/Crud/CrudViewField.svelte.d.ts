import { SvelteComponent } from "svelte";
import type { CommonFieldOptions, FieldInterface } from '$lib/Fields';
import type { CrudOperation } from '$lib/Crud/Operations';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        operation: CrudOperation;
        field: FieldInterface<CommonFieldOptions>;
        entityObject?: Record<string, unknown>;
        value: unknown;
        theme: ThemeConfig;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudViewFieldProps = typeof __propDef.props;
export type CrudViewFieldEvents = typeof __propDef.events;
export type CrudViewFieldSlots = typeof __propDef.slots;
export default class CrudViewField extends SvelteComponent<CrudViewFieldProps, CrudViewFieldEvents, CrudViewFieldSlots> {
}
export {};
