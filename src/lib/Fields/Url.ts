import { type InputFieldOptions, BaseField } from '$lib/Fields/index.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

/** */
export type UrlOptions = InputFieldOptions & {
	openInNewTab?: boolean;
};

/** */
export class UrlField extends BaseField<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
