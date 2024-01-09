import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type UrlOptions = CommonOptions & {
	openInNewTab: boolean;
};

export class UrlField extends Field<UrlOptions> {
	readonly formComponent: FormFieldTheme = 'url';
	readonly viewComponent: ViewFieldTheme = 'url';
}
