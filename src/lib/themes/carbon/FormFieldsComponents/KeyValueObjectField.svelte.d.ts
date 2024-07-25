import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: KeyValueObjectField;
        value: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type KeyValueObjectFieldProps = typeof __propDef.props;
export type KeyValueObjectFieldEvents = typeof __propDef.events;
export type KeyValueObjectFieldSlots = typeof __propDef.slots;
export default class KeyValueObjectField extends SvelteComponent<KeyValueObjectFieldProps, KeyValueObjectFieldEvents, KeyValueObjectFieldSlots> {
}
export {};
