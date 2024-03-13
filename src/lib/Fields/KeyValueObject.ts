import type{InputFieldOptions, FormFieldTheme, ViewFieldTheme} from '$lib';
import {BaseField} from '$lib/Fields';

/** */
export type ObjectOptions = InputFieldOptions & {
	// maxDepth?: number, // TODO: check if we can create an input with nested key=>value pairs with a max depth
};

/** */
export class KeyValueObjectField extends BaseField<ObjectOptions> {
	readonly formComponent: FormFieldTheme = 'key_value_object';
	readonly viewComponent: ViewFieldTheme = 'key_value_object';

	public readonly propertyPath: string;

	constructor(
		name: string,
		label: string = '',
		propertyTree: string = '',
		options: ObjectOptions = {} as ObjectOptions
	) {
		super(name, label, options);
		this.propertyPath = propertyTree;
	}
}
