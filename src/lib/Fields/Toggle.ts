import { type CommonFieldOptions, BaseField } from '$lib/Fields/Field.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type ToggleOptions = CommonFieldOptions;

/** */
export class ToggleField extends BaseField<ToggleOptions> {
	readonly formComponent: FormFieldTheme = 'toggle';
	readonly viewComponent: ViewFieldTheme = 'toggle';
}
