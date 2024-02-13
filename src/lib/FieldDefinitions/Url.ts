import { Field, type InputFieldOptions } from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/** */
export type UrlOptions = InputFieldOptions & {
	openInNewTab: boolean;
};

/** */
export class UrlField extends Field<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
