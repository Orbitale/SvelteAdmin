import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type HiddenOptions = CommonFieldOptions;

/** */
export class HiddenField extends BaseField<HiddenOptions> {
	readonly formComponent: FormFieldTheme = 'hidden';
	readonly viewComponent: ViewFieldTheme = 'hidden';
}
