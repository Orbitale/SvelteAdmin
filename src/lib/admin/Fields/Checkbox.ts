import type {ComponentType} from "svelte";
import CheckboxFieldComponent from "../Crud/Fields/CheckboxField.svelte";
import {Field} from "./Field";
import type {Options} from "./Options";

export type CheckboxOptions = Options;

export class CheckboxField extends Field<CheckboxOptions> {
    readonly formComponent: ComponentType = CheckboxFieldComponent;
}
