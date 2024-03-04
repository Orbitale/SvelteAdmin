import { type CommonFieldOptions, Field } from '$lib/Fields';

import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type CheckboxOptions = CommonFieldOptions;

/** */
export class CheckboxField extends Field<CheckboxOptions> {
	readonly formComponent: FormFieldTheme = 'checkbox';
	readonly viewComponent: ViewFieldTheme = 'checkbox';
}
