import { Field } from '$lib/Fields';
import type { TextOptions } from '$lib/Fields/Text';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type TextareaOptions = TextOptions & {
	rows?: number;
};

/** */
export class TextareaField extends Field<TextareaOptions> {
	readonly formComponent: FormFieldTheme = 'textarea';
	readonly viewComponent: ViewFieldTheme = 'textarea';
}
