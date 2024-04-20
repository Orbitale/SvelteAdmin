import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type __fullPascalCase__Options = InputFieldOptions & {
	// __fullPascalCase__ specific options
};

/** */
export class __fullPascalCase__ extends BaseField<__fullPascalCase__Options> {
	readonly formComponent: FormFieldTheme = '__baseSnakeCase__';
	readonly viewComponent: ViewFieldTheme = '__baseSnakeCase__';
}
