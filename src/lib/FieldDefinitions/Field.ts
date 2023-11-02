import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export interface FieldInterface<T extends Options> {
	readonly name: string;
	readonly label: string;
	readonly options: Partial<T>;
	readonly formComponent: FormFieldTheme;
	readonly viewComponent: ViewFieldTheme;
}

export class Field<T extends Options> implements FieldInterface<T> {
	public readonly name: string;
	public readonly label: string;
	public readonly options: Partial<T>;
	public readonly formComponent: FormFieldTheme = 'default';
	public readonly viewComponent: ViewFieldTheme = 'default';

	constructor(name: string, label: string = '', options: Partial<T> = {}) {
		this.name = name;
		this.label = label ? label : name;

		options.required ??= true;
		options.disabled ??= false;
		this.options = options || {};
	}
}
