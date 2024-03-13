import type{TextOptions, FormFieldTheme, ViewFieldTheme} from '$lib';
import {BaseField} from '$lib/Fields';

/** */
export type TextareaOptions = TextOptions & {
	rows?: number;
};

/** */
export class TextareaField extends BaseField<TextareaOptions> {
	readonly formComponent: FormFieldTheme = 'textarea';
	readonly viewComponent: ViewFieldTheme = 'textarea';
}
