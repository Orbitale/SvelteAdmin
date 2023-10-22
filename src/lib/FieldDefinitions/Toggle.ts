import type { ComponentType } from 'svelte';
import ToggleFieldComponent from '$lib/themes/carbon/FormFieldsComponents/ToggleField.svelte';
import CheckboxViewComponent from '$lib/themes/carbon/ViewFieldsComponents/CheckboxField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';

export type ToggleOptions = Options;

export class ToggleField extends Field<ToggleOptions> {
	readonly formComponent: ComponentType = ToggleFieldComponent;
	readonly viewComponent: ComponentType = CheckboxViewComponent;
}
