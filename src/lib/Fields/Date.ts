import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type DateOptions = InputFieldOptions & {
	formFormat?: string; // Default: 'Y-m-d'
};

/** */
export class DateField extends BaseField<DateOptions> {
	readonly formComponent: FormFieldTheme = 'date';
	readonly viewComponent: ViewFieldTheme = 'date';
}
