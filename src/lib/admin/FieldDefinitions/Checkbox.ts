import type { ComponentType } from 'svelte';
import CheckboxFieldComponent from '$lib/admin/Crud/FieldComponents/CheckboxField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { Options } from '$lib/admin/FieldDefinitions/Options';

export type CheckboxOptions = Options;

export class CheckboxField extends Field<CheckboxOptions> {
	readonly formComponent: ComponentType = CheckboxFieldComponent;
}
