import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type FieldOptions = {
	disableOnOperations?: Array<string>;
	[key: string]: string | number | boolean | unknown;
};

export type CommonFieldOptions = FieldOptions & {
	required?: boolean;
	disabled?: boolean;
	sortable?: true;
	help?: string;
};

export type InputFieldOptions = CommonFieldOptions & {
	placeholder?: string;
};

export interface FieldInterface<T extends FieldOptions> {
	readonly name: string;
	readonly label: string;
	readonly options: T;
	readonly formComponent: FormFieldTheme;
	readonly viewComponent: ViewFieldTheme;
}

export class Field<T extends FieldOptions> implements FieldInterface<T> {
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
