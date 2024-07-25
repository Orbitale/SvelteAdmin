import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: TextareaField;
        value: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TextareaFieldProps = typeof __propDef.props;
export type TextareaFieldEvents = typeof __propDef.events;
export type TextareaFieldSlots = typeof __propDef.slots;
export default class TextareaField extends SvelteComponent<TextareaFieldProps, TextareaFieldEvents, TextareaFieldSlots> {
}
export {};
