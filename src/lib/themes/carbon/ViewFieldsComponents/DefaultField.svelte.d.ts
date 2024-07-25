import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DefaultFieldProps = typeof __propDef.props;
export type DefaultFieldEvents = typeof __propDef.events;
export type DefaultFieldSlots = typeof __propDef.slots;
export default class DefaultField extends SvelteComponent<DefaultFieldProps, DefaultFieldEvents, DefaultFieldSlots> {
}
export {};
