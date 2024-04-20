import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

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
