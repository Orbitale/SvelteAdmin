import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        filter: NumericFilter;
        value: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type NumericFilterProps = typeof __propDef.props;
export type NumericFilterEvents = typeof __propDef.events;
export type NumericFilterSlots = typeof __propDef.slots;
export default class NumericFilter extends SvelteComponent<NumericFilterProps, NumericFilterEvents, NumericFilterSlots> {
}
export {};
