import { type InputFieldOptions, BaseField } from '$lib/Fields/index.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type EmailFieldOptions = InputFieldOptions & {};

/** */
export class EmailField extends BaseField<EmailFieldOptions> {
	readonly formComponent: FormFieldTheme = 'email';
	readonly viewComponent: ViewFieldTheme = 'email';
}
