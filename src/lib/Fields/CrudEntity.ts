import { Field, type InputFieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme, KeyValueObject } from '$lib/types';

/** */
export type CrudEntityOptions = InputFieldOptions & {
	crud_name: string;
	list_provider_operation?: {
		name?: 'entity_list' | string;
		options?: KeyValueObject;
		label_field: string;
		value_field?: 'id' | string;
	};
	get_provider_operation: {
		name?: 'entity_view' | string;
		options?: KeyValueObject;
		entity_field: string;
	};
};

/** */
export class CrudEntityField extends Field<CrudEntityOptions> {
	readonly formComponent: FormFieldTheme = 'crud_entity';
	readonly viewComponent: ViewFieldTheme = 'crud_entity';

	constructor(name: string, label: string = '', options: CrudEntityOptions) {
		super(name, label, options);
	}
}
