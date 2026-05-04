import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type SlugOptions = InputFieldOptions & {
	maxLength?: number;
};

/** */
export class SlugField extends BaseField<SlugOptions> {
	readonly formComponent: FormFieldTheme = 'slug';
	readonly viewComponent: ViewFieldTheme = 'slug';
}
