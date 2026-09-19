import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type EmailFieldOptions = InputFieldOptions & {};

/** */
export class EmailField extends BaseField<EmailFieldOptions> {
	readonly formComponent: FormFieldTheme = 'email';
	readonly viewComponent: ViewFieldTheme = 'email';
}
