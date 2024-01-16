import {Field, type InputFieldOptions} from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type TextOptions = InputFieldOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

export class TextField extends Field<TextOptions> {
	readonly formComponent: FormFieldTheme = 'text';
	readonly viewComponent: ViewFieldTheme = 'text';
}
