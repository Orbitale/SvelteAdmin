import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type DateTimeOptions = InputFieldOptions & {
	formFormat?: string;
};

/** */
export class DateTimeField extends BaseField<DateTimeOptions> {
	readonly formComponent: FormFieldTheme = 'date_time';
	readonly viewComponent: ViewFieldTheme = 'date_time';
}
