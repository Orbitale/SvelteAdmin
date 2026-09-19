import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type ToggleOptions = CommonFieldOptions;

/** */
export class ToggleField extends BaseField<ToggleOptions> {
	readonly formComponent: FormFieldTheme = 'toggle';
	readonly viewComponent: ViewFieldTheme = 'toggle';
}
