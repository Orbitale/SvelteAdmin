import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: NumberField;
        value: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type NumberFieldProps = typeof __propDef.props;
export type NumberFieldEvents = typeof __propDef.events;
export type NumberFieldSlots = typeof __propDef.slots;
export default class NumberField extends SvelteComponent<NumberFieldProps, NumberFieldEvents, NumberFieldSlots> {
}
export {};
