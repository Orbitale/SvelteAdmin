import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type CountryOptions = CommonFieldOptions & {
	placeholder?: string;
	displayLocale?: string;
	only?: Array<string>;
};

/** */
export class CountryField extends BaseField<CountryOptions> {
	readonly formComponent: FormFieldTheme = 'country';
	readonly viewComponent: ViewFieldTheme = 'country';
}
