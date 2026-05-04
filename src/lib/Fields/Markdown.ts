import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type MarkdownOptions = InputFieldOptions & {
	rows?: number;
};

/** */
export class MarkdownField extends BaseField<MarkdownOptions> {
	readonly formComponent: FormFieldTheme = 'markdown';
	readonly viewComponent: ViewFieldTheme = 'markdown';
}
