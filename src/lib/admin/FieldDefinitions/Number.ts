import type { ComponentType } from 'svelte';
import NumberFieldComponent from '$lib/admin/Crud/FieldComponents/NumberField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/admin/FieldDefinitions/Options';

export type NumberOptions = CommonOptions & {
	min?: number;
	max?: number;
};

export class NumberField extends Field<NumberOptions> {
	readonly formComponent: ComponentType = NumberFieldComponent;
}
