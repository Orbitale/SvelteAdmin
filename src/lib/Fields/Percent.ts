import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type PercentOptions = InputFieldOptions & {
	min?: number;
	max?: number;
	decimals?: number;
	storedAs?: 'ratio' | 'percent';
};

/** */
export class PercentField extends BaseField<PercentOptions> {
	readonly formComponent: FormFieldTheme = 'percent';
	readonly viewComponent: ViewFieldTheme = 'percent';
}
