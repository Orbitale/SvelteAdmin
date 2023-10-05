import type {ComponentType} from "svelte";
import TextFieldComponent from "../Crud/FieldComponents/TextField.svelte";
import {Field} from "./Field";
import type {CommonOptions} from "./Options";

export type TextOptions = CommonOptions & {
    maxLength?: number,
    stripTags?: boolean,
};

export class TextField extends Field<TextOptions> {
    readonly formComponent: ComponentType = TextFieldComponent;
}
