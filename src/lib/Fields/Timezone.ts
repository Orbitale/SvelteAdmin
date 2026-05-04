import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type TimezoneOptions = CommonFieldOptions & {
	placeholder?: string;
	only?: Array<string>;
};

/** */
export class TimezoneField extends BaseField<TimezoneOptions> {
	readonly formComponent: FormFieldTheme = 'timezone';
	readonly viewComponent: ViewFieldTheme = 'timezone';
}
