import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type TimeOptions = InputFieldOptions & {
	step?: number;
};

/** */
export class TimeField extends BaseField<TimeOptions> {
	readonly formComponent: FormFieldTheme = 'time';
	readonly viewComponent: ViewFieldTheme = 'time';
}
