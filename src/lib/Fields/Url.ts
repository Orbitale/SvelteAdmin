import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/index.js';

/** */
export type UrlOptions = InputFieldOptions & {
	openInNewTab?: boolean;
};

/** */
export class UrlField extends BaseField<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
