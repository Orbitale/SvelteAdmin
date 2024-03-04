import { Field, type InputFieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type UrlOptions = InputFieldOptions & {
	openInNewTab: boolean;
};

/** */
export class UrlField extends Field<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
