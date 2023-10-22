import type { ComponentType } from 'svelte';
import CheckboxFormComponent from '$lib/themes/carbon/FormFieldsComponents/CheckboxField.svelte';
import CheckboxViewComponent from '$lib/themes/carbon/ViewFieldsComponents/CheckboxField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';

export type CheckboxOptions = Options;

export class CheckboxField extends Field<CheckboxOptions> {
	readonly formComponent: ComponentType = CheckboxFormComponent;
	readonly viewComponent: ComponentType = CheckboxViewComponent;
}
