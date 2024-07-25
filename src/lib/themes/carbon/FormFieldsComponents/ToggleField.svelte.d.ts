import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: ToggleField;
        value: boolean | undefined;
    };
    events: {
        change: CustomEvent<boolean>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToggleFieldProps = typeof __propDef.props;
export type ToggleFieldEvents = typeof __propDef.events;
export type ToggleFieldSlots = typeof __propDef.slots;
export default class ToggleField extends SvelteComponent<ToggleFieldProps, ToggleFieldEvents, ToggleFieldSlots> {
}
export {};
