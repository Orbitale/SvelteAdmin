import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CheckboxFieldProps = typeof __propDef.props;
export type CheckboxFieldEvents = typeof __propDef.events;
export type CheckboxFieldSlots = typeof __propDef.slots;
export default class CheckboxField extends SvelteComponent<CheckboxFieldProps, CheckboxFieldEvents, CheckboxFieldSlots> {
}
export {};
