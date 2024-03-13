import type{CommonFieldOptions, FormFieldTheme, ViewFieldTheme} from '$lib';
import {BaseField} from '$lib/Fields';

/** */
export type ToggleOptions = CommonFieldOptions;

/** */
export class ToggleField extends BaseField<ToggleOptions> {
	readonly formComponent: FormFieldTheme = 'toggle';
	readonly viewComponent: ViewFieldTheme = 'toggle';
}
