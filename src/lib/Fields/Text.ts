import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type TextOptions = InputFieldOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

/** */
export class TextField extends BaseField<TextOptions> {
	readonly formComponent: FormFieldTheme = 'text';
	readonly viewComponent: ViewFieldTheme = 'text';
}
