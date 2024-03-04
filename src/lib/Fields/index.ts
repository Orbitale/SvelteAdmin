import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type FieldOptions = {
	disableOnOperations?: Array<string>;
	[key: string]: string | number | boolean | unknown;
};

/** */
export type CommonFieldOptions = FieldOptions & {
	required?: boolean;
	disabled?: boolean;
	sortable?: true;
	help?: string;
};

/** */
export type InputFieldOptions = CommonFieldOptions & {
	placeholder?: string;
};

/** */
export interface FieldInterface<OptionsType extends FieldOptions> {
	readonly name: string;
	readonly label: string;
	readonly options: OptionsType;
	readonly formComponent: FormFieldTheme;
	readonly viewComponent: ViewFieldTheme;
}

/**
 * @abstract
 **/
export class Field<OptionsType extends FieldOptions> implements FieldInterface<OptionsType> {
	public readonly formComponent: FormFieldTheme = 'default';
	public readonly viewComponent: ViewFieldTheme = 'default';

	constructor(
		public readonly name: string,
		public readonly label: string = '',
		public readonly options: OptionsType = {} as OptionsType
	) {
		this.label = label || name;
	}
}
