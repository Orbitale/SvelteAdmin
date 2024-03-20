import type {InputFieldOptions, FormFieldTheme, ViewFieldTheme, FieldInterface, FieldOptions} from '$lib';
import {BaseField} from '$lib/Fields';

/** */
export type ArrayFieldOptions = InputFieldOptions & {
	//
};

/** */
export class ArrayField<InnerField extends FieldInterface<FieldOptions>> extends BaseField<ArrayFieldOptions> {
	readonly formComponent: FormFieldTheme = 'array';
	readonly viewComponent: ViewFieldTheme = 'array';
	public readonly innerField: InnerField;

    constructor(name: string, label: string = '', innerField: InnerField, options?: ArrayFieldOptions) {
        super(name, label, options);
		this.innerField = innerField;
    }
}
