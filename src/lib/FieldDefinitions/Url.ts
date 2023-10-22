import type { ComponentType } from 'svelte';
import UrlFieldComponent from '$lib/themes/carbon/FormFieldsComponents/UrlField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';
import UrlViewFieldComponent from '$lib/themes/carbon/ViewFieldsComponents/UrlField.svelte';

export type UrlOptions = CommonOptions;

export class UrlField extends Field<UrlOptions> {
	readonly formComponent: ComponentType = UrlFieldComponent;
	readonly viewComponent: ComponentType = UrlViewFieldComponent;
}
