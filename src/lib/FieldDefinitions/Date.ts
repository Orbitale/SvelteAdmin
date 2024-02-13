import { Field, type InputFieldOptions } from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/** */
export type DateOptions = InputFieldOptions & {
	formFormat?: string; // Default: 'Y-m-d'
};

/** */
export class DateField extends Field<DateOptions> {
	readonly formComponent: FormFieldTheme = 'date';
	readonly viewComponent: ViewFieldTheme = 'date';
}
