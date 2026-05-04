import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type MoneyOptions = InputFieldOptions & {
	currency?: string;
	displayLocale?: string;
	min?: number;
	max?: number;
};

/** */
export class MoneyField extends BaseField<MoneyOptions> {
	readonly formComponent: FormFieldTheme = 'money';
	readonly viewComponent: ViewFieldTheme = 'money';
}
