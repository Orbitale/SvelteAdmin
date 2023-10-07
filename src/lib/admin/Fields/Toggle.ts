import type {ComponentType} from "svelte";
import ToggleFieldComponent from "../Crud/Fields/ToggleField.svelte";
import {Field} from "./Field";
import type {Options} from "./Options";

export type ToggleOptions = Options;

export class ToggleField extends Field<ToggleOptions> {
    readonly formComponent: ComponentType = ToggleFieldComponent;
}
