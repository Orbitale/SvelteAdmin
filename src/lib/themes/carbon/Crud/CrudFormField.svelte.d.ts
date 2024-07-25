import { SvelteComponent } from "svelte";
import type { CommonFieldOptions, FieldInterface } from '$lib/Fields';
import type { CrudOperation } from '$lib/Crud/Operations';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        operation: CrudOperation;
        field: FieldInterface<CommonFieldOptions>;
        data?: Record<string, unknown>;
        value: unknown;
        theme: ThemeConfig;
    };
    events: {
        blur: any;
        check: any;
        click: any;
        focus: any;
        input: any;
        keydown: any;
        keyup: any;
        mouseenter: any;
        mouseleave: any;
        mouseover: any;
        paste: any;
        toggle: any;
        fieldChange: CustomEvent<{
            key: string;
            value: object | unknown;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudFormFieldProps = typeof __propDef.props;
export type CrudFormFieldEvents = typeof __propDef.events;
export type CrudFormFieldSlots = typeof __propDef.slots;
export default class CrudFormField extends SvelteComponent<CrudFormFieldProps, CrudFormFieldEvents, CrudFormFieldSlots> {
}
export {};
