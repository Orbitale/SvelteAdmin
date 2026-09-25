import { type InputFieldOptions, BaseField } from '$lib/Fields/Field.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

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
