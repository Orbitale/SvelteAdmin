import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type CheckboxOptions = CommonFieldOptions;

/** */
export class CheckboxField extends BaseField<CheckboxOptions> {
	readonly formComponent: FormFieldTheme = 'checkbox';
	readonly viewComponent: ViewFieldTheme = 'checkbox';
}
