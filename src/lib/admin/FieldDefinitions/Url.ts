import type { ComponentType } from 'svelte';
import UrlFieldComponent from '$lib/admin/Crud/FieldComponents/UrlField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/admin/FieldDefinitions/Options';

export type UrlOptions = CommonOptions;

export class UrlField extends Field<UrlOptions> {
	readonly formComponent: ComponentType = UrlFieldComponent;
}
