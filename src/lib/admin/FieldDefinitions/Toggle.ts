import type { ComponentType } from 'svelte';
import ToggleFieldComponent from '$lib/admin/Crud/FieldComponents/ToggleField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { Options } from '$lib/admin/FieldDefinitions/Options';

export type ToggleOptions = Options;

export class ToggleField extends Field<ToggleOptions> {
	readonly formComponent: ComponentType = ToggleFieldComponent;
}
