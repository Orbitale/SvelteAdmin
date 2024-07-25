import { SvelteComponent } from "svelte";
import type { CrudOperation } from '$lib/Crud/Operations';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        field: ColumnsField;
        operation: CrudOperation;
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
export type ColumnsFieldProps = typeof __propDef.props;
export type ColumnsFieldEvents = typeof __propDef.events;
export type ColumnsFieldSlots = typeof __propDef.slots;
export default class ColumnsField extends SvelteComponent<ColumnsFieldProps, ColumnsFieldEvents, ColumnsFieldSlots> {
}
export {};
