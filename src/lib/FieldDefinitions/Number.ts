import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type NumberOptions = CommonOptions & {
	min?: number;
	max?: number;
};

export class NumberField extends Field<NumberOptions> {
	readonly formComponent: FormFieldTheme = 'number';
	readonly viewComponent: ViewFieldTheme = 'number';
}
