import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type CheckboxOptions = CommonFieldOptions;

/** */
export class CheckboxField extends BaseField<CheckboxOptions> {
	readonly formComponent: FormFieldTheme = 'checkbox';
	readonly viewComponent: ViewFieldTheme = 'checkbox';
}
