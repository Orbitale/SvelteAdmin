import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type PasswordOptions = InputFieldOptions & {
	minLength?: number;
	maxLength?: number;
};

/** */
export class PasswordField extends BaseField<PasswordOptions> {
	readonly formComponent: FormFieldTheme = 'password';
	readonly viewComponent: ViewFieldTheme = 'password';
}
