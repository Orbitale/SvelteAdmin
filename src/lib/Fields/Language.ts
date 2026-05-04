import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type LanguageOptions = CommonFieldOptions & {
	placeholder?: string;
	displayLocale?: string;
	only?: Array<string>;
};

/** */
export class LanguageField extends BaseField<LanguageOptions> {
	readonly formComponent: FormFieldTheme = 'language';
	readonly viewComponent: ViewFieldTheme = 'language';
}
