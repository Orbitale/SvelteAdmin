import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
import type { CrudOperation } from '$lib/Crud/Operations';
import type { Columns as ColumnField } from '$lib/Fields/Columns';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        FieldComponent: ComponentType;
        field: ColumnField;
        operation: CrudOperation;
        entityObject?: Record<string, unknown>;
        value: unknown;
        theme: ThemeConfig;
    };
    events: {
        fieldChange: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ColumnsProps = typeof __propDef.props;
export type ColumnsEvents = typeof __propDef.events;
export type ColumnsSlots = typeof __propDef.slots;
export default class Columns extends SvelteComponent<ColumnsProps, ColumnsEvents, ColumnsSlots> {
}
export {};
