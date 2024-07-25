import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        filter: DateFilter;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DateFilterProps = typeof __propDef.props;
export type DateFilterEvents = typeof __propDef.events;
export type DateFilterSlots = typeof __propDef.slots;
export default class DateFilter extends SvelteComponent<DateFilterProps, DateFilterEvents, DateFilterSlots> {
}
export {};
