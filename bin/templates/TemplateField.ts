import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib/index.js';
import { BaseField } from '$lib/Fields/Field.js';

/** */
export type __fullPascalCase__Options = InputFieldOptions & {
	// __fullPascalCase__ specific options
};

/** */
export class __fullPascalCase__ extends BaseField<__fullPascalCase__Options> {
	readonly formComponent: FormFieldTheme = '__baseSnakeCase__';
	readonly viewComponent: ViewFieldTheme = '__baseSnakeCase__';
}
