import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type UrlOptions = InputFieldOptions & {
	openInNewTab?: boolean;
};

/** */
export class UrlField extends BaseField<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
