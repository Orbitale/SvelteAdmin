import type { TextOptions } from '$lib/Fields/Text.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';
import { BaseField } from '$lib/Fields/Field.js';

/** */
export type TextareaOptions = TextOptions & {
	rows?: number;
};

/** */
export class TextareaField extends BaseField<TextareaOptions> {
	readonly formComponent: FormFieldTheme = 'textarea';
	readonly viewComponent: ViewFieldTheme = 'textarea';
}
