import { Field } from '$lib/FieldDefinitions/definition';
import type { TextOptions } from '$lib/FieldDefinitions/Text';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/** */
export type TextareaOptions = TextOptions & {
	rows?: number;
};

/** */
export class TextareaField extends Field<TextareaOptions> {
	readonly formComponent: FormFieldTheme = 'textarea';
	readonly viewComponent: ViewFieldTheme = 'textarea';
}
