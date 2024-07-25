import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
import type { CrudOperation } from '$lib/Crud/Operations';
import type { Tabs as TabsField } from '$lib/Fields/Tabs';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        FieldComponent: ComponentType;
        field: TabsField;
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
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponent<TabsProps, TabsEvents, TabsSlots> {
}
export {};
