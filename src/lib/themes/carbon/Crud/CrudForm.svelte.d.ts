import { SvelteComponent } from "svelte";
import type { CrudOperation } from '$lib/Crud/Operations';
import type { SubmitButtonType, ThemeConfig } from '$lib/types';
import { type SubmittedData } from '$lib/Crud/Form';
declare const __propDef: {
    props: {
        submitButtonType?: SubmitButtonType;
        method?: "get" | "post";
        operation: CrudOperation;
        defaultData?: undefined | null | Record<string, unknown>;
        theme?: ThemeConfig;
        htmlFormElement: HTMLFormElement | null | undefined;
    };
    events: {
        click: any;
        keydown: any;
        mouseover: any;
        mouseenter: any;
        mouseleave: any;
        submit: any;
        fieldChange: any;
        submitData: CustomEvent<SubmittedData>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'form-header': {};
        'form-footer': {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CrudFormProps = typeof __propDef.props;
export type CrudFormEvents = typeof __propDef.events;
export type CrudFormSlots = typeof __propDef.slots;
export default class CrudForm extends SvelteComponent<CrudFormProps, CrudFormEvents, CrudFormSlots> {
}
export {};
