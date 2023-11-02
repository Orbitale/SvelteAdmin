import { Field } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type CheckboxOptions = Options;

export class CheckboxField extends Field<CheckboxOptions> {
	readonly formComponent: FormFieldTheme = 'checkbox';
	readonly viewComponent: ViewFieldTheme = 'checkbox';
}
