import { type InputFieldOptions, BaseField } from '$lib/Fields/index.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type DateOptions = InputFieldOptions & {
	formFormat?: string; // Default: 'Y-m-d'
};

/** */
export class DateField extends BaseField<DateOptions> {
	readonly formComponent: FormFieldTheme = 'date';
	readonly viewComponent: ViewFieldTheme = 'date';
}
