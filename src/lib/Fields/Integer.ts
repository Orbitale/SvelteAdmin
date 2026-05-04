import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type IntegerOptions = InputFieldOptions & {
	min?: number;
	max?: number;
	step?: number;
};

/** */
export class IntegerField extends BaseField<IntegerOptions> {
	readonly formComponent: FormFieldTheme = 'integer';
	readonly viewComponent: ViewFieldTheme = 'integer';
}
