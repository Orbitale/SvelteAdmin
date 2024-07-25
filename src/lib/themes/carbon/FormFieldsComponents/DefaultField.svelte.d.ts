import { SvelteComponent } from "svelte";
import type { CommonFieldOptions, BaseField } from '$lib/Fields';
declare const __propDef: {
    props: {
        field: BaseField<CommonFieldOptions>;
        value: object | undefined;
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
