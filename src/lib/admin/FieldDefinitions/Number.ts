import type { ComponentType } from 'svelte';
import NumberFieldComponent from '../Crud/FieldComponents/NumberField.svelte';
import { Field } from './Field';
import type { CommonOptions } from './Options';

export type NumberOptions = CommonOptions & {
	min?: number;
	max?: number;
};

export class NumberField extends Field<NumberOptions> {
	readonly formComponent: ComponentType = NumberFieldComponent;
}
