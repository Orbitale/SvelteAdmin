import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type TelOptions = InputFieldOptions & {
	pattern?: string;
};

/** */
export class TelField extends BaseField<TelOptions> {
	readonly formComponent: FormFieldTheme = 'tel';
	readonly viewComponent: ViewFieldTheme = 'tel';
}
