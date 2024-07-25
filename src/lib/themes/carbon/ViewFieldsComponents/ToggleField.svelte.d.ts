import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: boolean | undefined;
    };
    events: {
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
