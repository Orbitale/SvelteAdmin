import type { BaseOptions } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export interface FieldInterface<T extends BaseOptions> {
	readonly name: string;
	readonly label: string;
	readonly options: T;
	readonly formComponent: FormFieldTheme;
	readonly viewComponent: ViewFieldTheme;
}

export class Field<T extends BaseOptions> implements FieldInterface<T> {
	public readonly formComponent: FormFieldTheme = 'default';
	public readonly viewComponent: ViewFieldTheme = 'default';

	constructor(
		public readonly name: string,
		public readonly label: string = '',
		public readonly options: T = {} as T
	) {
		this.label = label || name;
	}
}
