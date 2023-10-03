import type {ComponentType} from "svelte";
import TextareaFieldComponent from "../Crud/Fields/TextareaField.svelte";
import {Field} from "./Field";
import type {TextOptions} from "./Text";

export type TextareaOptions = TextOptions & {
    rows?: number,
};

export class TextareaField extends Field<TextareaOptions> {
    readonly formComponent: ComponentType = TextareaFieldComponent;
}
