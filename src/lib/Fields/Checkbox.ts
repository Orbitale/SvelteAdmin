import { type CommonFieldOptions, BaseField } from '$lib/Fields/index.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type CheckboxOptions = CommonFieldOptions;

/** */
export class CheckboxField extends BaseField<CheckboxOptions> {
	readonly formComponent: FormFieldTheme = 'checkbox';
	readonly viewComponent: ViewFieldTheme = 'checkbox';
}
