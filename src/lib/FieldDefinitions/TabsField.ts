import type { ComponentType } from 'svelte';
import type { FieldInterface } from '$lib/FieldDefinitions/Field';
import TabsFieldComponent from '$lib/themes/carbon/FormFieldsComponents/TabsField.svelte';
import type { Options } from '$lib/FieldDefinitions/Options';
import CrudViewField from '$lib/themes/carbon/Crud/CrudViewField.svelte';

export type TabOptions = Options & {
	headerType: 'default' | 'container';
};

export class TabsField implements FieldInterface<TabOptions> {
	public readonly name: string;
	public readonly label: string;
	public readonly fields: Array<FieldInterface<Options>>;
	public readonly options: Partial<TabOptions>;
	public readonly formComponent: ComponentType = TabsFieldComponent;
	public readonly viewComponent: ComponentType = CrudViewField;

	constructor(
		name: string,
		label: string = '',
		fields: Array<FieldInterface<Options>> = [],
		options: TabOptions = {} as TabOptions
	) {
		this.name = name;
		this.label = label ? label : name;
		this.fields = fields;
		this.options = options || {};
	}
}
