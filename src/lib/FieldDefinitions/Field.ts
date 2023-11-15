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
	public readonly formComponent: FormFieldTheme = 'default';
	public readonly viewComponent: ViewFieldTheme = 'default';

	constructor(
		public readonly name: string,
		public readonly label: string = '',
		public readonly options: Partial<T> = {}
	) {
		this.label = label || name;

		this.options.required ??= true;
		this.options.disabled ??= false;
	}
}
