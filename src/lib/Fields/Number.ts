import { Field, type InputFieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type NumberOptions = InputFieldOptions & {
	min?: number;
	max?: number;
};

/** */
export class NumberField extends Field<NumberOptions> {
	readonly formComponent: FormFieldTheme = 'number';
	readonly viewComponent: ViewFieldTheme = 'number';
}
