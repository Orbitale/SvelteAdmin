import type { TextOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type TextareaOptions = TextOptions & {
	rows?: number;
};

/** */
export class TextareaField extends BaseField<TextareaOptions> {
	readonly formComponent: FormFieldTheme = 'textarea';
	readonly viewComponent: ViewFieldTheme = 'textarea';
}
