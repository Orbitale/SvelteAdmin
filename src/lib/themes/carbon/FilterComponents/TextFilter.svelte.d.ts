import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        filter: TextFilter;
        value: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TextFilterProps = typeof __propDef.props;
export type TextFilterEvents = typeof __propDef.events;
export type TextFilterSlots = typeof __propDef.slots;
export default class TextFilter extends SvelteComponent<TextFilterProps, TextFilterEvents, TextFilterSlots> {
}
export {};
