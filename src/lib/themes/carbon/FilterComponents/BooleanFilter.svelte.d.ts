import { SvelteComponent } from "svelte";
import type { TextFilter } from '$lib/Filter';
declare const __propDef: {
    props: {
        filter: TextFilter;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BooleanFilterProps = typeof __propDef.props;
export type BooleanFilterEvents = typeof __propDef.events;
export type BooleanFilterSlots = typeof __propDef.slots;
export default class BooleanFilter extends SvelteComponent<BooleanFilterProps, BooleanFilterEvents, BooleanFilterSlots> {
}
export {};
