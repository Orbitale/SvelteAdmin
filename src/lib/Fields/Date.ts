import { Field, type InputFieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type DateOptions = InputFieldOptions & {
	formFormat?: string; // Default: 'Y-m-d'
};

/** */
export class DateField extends Field<DateOptions> {
	readonly formComponent: FormFieldTheme = 'date';
	readonly viewComponent: ViewFieldTheme = 'date';
}
