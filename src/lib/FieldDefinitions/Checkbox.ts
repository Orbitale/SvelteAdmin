import type { ComponentType } from 'svelte';
import CheckboxFieldComponent from '$lib/themes/carbon/FieldComponents/CheckboxField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';

export type CheckboxOptions = Options;

export class CheckboxField extends Field<CheckboxOptions> {
	readonly formComponent: ComponentType = CheckboxFieldComponent;
}
