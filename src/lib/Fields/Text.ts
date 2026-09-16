import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

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
