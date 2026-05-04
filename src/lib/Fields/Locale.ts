import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type LocaleOptions = CommonFieldOptions & {
	placeholder?: string;
	displayLocale?: string;
	only?: Array<string>;
};

/** */
export class LocaleField extends BaseField<LocaleOptions> {
	readonly formComponent: FormFieldTheme = 'locale';
	readonly viewComponent: ViewFieldTheme = 'locale';
}
