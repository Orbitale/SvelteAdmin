import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type ColorOptions = InputFieldOptions;

/** */
export class ColorField extends BaseField<ColorOptions> {
	readonly formComponent: FormFieldTheme = 'color';
	readonly viewComponent: ViewFieldTheme = 'color';
}
