import { SvelteComponent } from "svelte";
import type { CrudOperation } from '$lib/Crud/Operations';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        field: TabsField;
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
export type TabsFieldProps = typeof __propDef.props;
export type TabsFieldEvents = typeof __propDef.events;
export type TabsFieldSlots = typeof __propDef.slots;
export default class TabsField extends SvelteComponent<TabsFieldProps, TabsFieldEvents, TabsFieldSlots> {
}
export {};
