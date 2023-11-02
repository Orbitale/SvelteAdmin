import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type TextOptions = CommonOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

export class TextField extends Field<TextOptions> {
	readonly formComponent: FormFieldTheme = 'text';
	readonly viewComponent: ViewFieldTheme = 'default';
}
