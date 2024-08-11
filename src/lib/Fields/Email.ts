import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type EmailFieldOptions = InputFieldOptions & {
};

/** */
export class EmailField extends BaseField<EmailFieldOptions> {
	readonly formComponent: FormFieldTheme = 'email';
	readonly viewComponent: ViewFieldTheme = 'email';
}
