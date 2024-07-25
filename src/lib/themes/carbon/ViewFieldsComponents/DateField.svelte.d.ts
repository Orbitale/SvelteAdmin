import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Date | string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DateFieldProps = typeof __propDef.props;
export type DateFieldEvents = typeof __propDef.events;
export type DateFieldSlots = typeof __propDef.slots;
export default class DateField extends SvelteComponent<DateFieldProps, DateFieldEvents, DateFieldSlots> {
}
export {};
