import { type InputFieldOptions, BaseField } from '$lib/Fields/Field.js';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types.js';

export type CrudEntityListProviderOptions = { [key: string]: string };
export type CrudEntityGetProviderOptions = { [key: string]: string };

/** */
export type CrudEntityOptions = InputFieldOptions & {
	crud_name: string;
	list_provider_operation?: {
		name?: 'entity_list' | string;
		options?: CrudEntityListProviderOptions;
		label_field: string;
		value_field?: 'id' | string;
	};
	get_provider_operation: {
		name?: 'entity_view' | string;
		options?: CrudEntityGetProviderOptions;
		entity_field: string;
	};
};

/** */
export class CrudEntityField extends BaseField<CrudEntityOptions> {
	readonly formComponent: FormFieldTheme = 'crud_entity';
	readonly viewComponent: ViewFieldTheme = 'crud_entity';

	constructor(name: string, label: string = '', options: CrudEntityOptions) {
		super(name, label, options);
	}
}
