import { Field, type InputFieldOptions } from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/** */
export type ObjectOptions = InputFieldOptions & {
	// maxDepth?: number, // TODO: check if we can create an input with nested key=>value pairs with a max depth
};

/** */
export class KeyValueObjectField extends Field<ObjectOptions> {
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
