import type {  InputFieldOptions,  FormFieldTheme,  ViewFieldTheme } from '$lib';
import {BaseField} from '$lib/Fields';

/** */
export type DateOptions = InputFieldOptions & {
	formFormat?: string; // Default: 'Y-m-d'
};

/** */
export class DateField extends BaseField<DateOptions> {
	readonly formComponent: FormFieldTheme = 'date';
	readonly viewComponent: ViewFieldTheme = 'date';
}
