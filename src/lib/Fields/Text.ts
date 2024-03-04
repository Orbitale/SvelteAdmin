import { Field, type InputFieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type TextOptions = InputFieldOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

/** */
export class TextField extends Field<TextOptions> {
	readonly formComponent: FormFieldTheme = 'text';
	readonly viewComponent: ViewFieldTheme = 'text';
}
