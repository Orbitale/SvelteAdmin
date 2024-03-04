import { type CommonFieldOptions, Field } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type ToggleOptions = CommonFieldOptions;

/** */
export class ToggleField extends Field<ToggleOptions> {
	readonly formComponent: FormFieldTheme = 'toggle';
	readonly viewComponent: ViewFieldTheme = 'toggle';
}
