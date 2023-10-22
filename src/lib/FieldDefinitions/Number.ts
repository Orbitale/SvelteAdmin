import type { ComponentType } from 'svelte';
import NumberFieldComponent from '$lib/themes/carbon/FieldComponents/NumberField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';

export type NumberOptions = CommonOptions & {
	min?: number;
	max?: number;
};

export class NumberField extends Field<NumberOptions> {
	readonly formComponent: ComponentType = NumberFieldComponent;
}
