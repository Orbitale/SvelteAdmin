import { SvelteComponent } from "svelte";
import type { CheckboxField } from '$lib';
declare const __propDef: {
    props: {
        field: CheckboxField;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ViewLabelProps = typeof __propDef.props;
export type ViewLabelEvents = typeof __propDef.events;
export type ViewLabelSlots = typeof __propDef.slots;
export default class ViewLabel extends SvelteComponent<ViewLabelProps, ViewLabelEvents, ViewLabelSlots> {
}
export {};
