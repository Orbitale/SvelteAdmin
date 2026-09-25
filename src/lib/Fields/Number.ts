import { type InputFieldOptions, BaseField } from '$lib/Fields/Field.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type NumberOptions = InputFieldOptions & {
	min?: number;
	max?: number;
};

/** */
export class NumberField extends BaseField<NumberOptions> {
	readonly formComponent: FormFieldTheme = 'number';
	readonly viewComponent: ViewFieldTheme = 'number';
}
