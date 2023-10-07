import type {ComponentType} from "svelte";
import UrlFieldComponent from "../Crud/Fields/UrlField.svelte";
import {Field} from "./Field";
import type {CommonOptions} from "./Options";

export type UrlOptions = CommonOptions;

export class UrlField extends Field<UrlOptions> {
    readonly formComponent: ComponentType = UrlFieldComponent;
}
