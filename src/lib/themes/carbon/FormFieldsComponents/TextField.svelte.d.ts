import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: TextField;
        value: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TextFieldProps = typeof __propDef.props;
export type TextFieldEvents = typeof __propDef.events;
export type TextFieldSlots = typeof __propDef.slots;
export default class TextField extends SvelteComponent<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
export {};
