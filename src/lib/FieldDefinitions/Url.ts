import type { ComponentType } from 'svelte';
import UrlFieldComponent from '$lib/themes/carbon/FieldComponents/UrlField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';

export type UrlOptions = CommonOptions;

export class UrlField extends Field<UrlOptions> {
	readonly formComponent: ComponentType = UrlFieldComponent;
}
