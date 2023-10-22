import type { ComponentType } from 'svelte';
import DefaultFormFieldComponent from '$lib/themes/carbon/FormFieldsComponents/DefaultField.svelte';
import DefaultViewFieldComponent from '$lib/themes/carbon/ViewFieldsComponents/DefaultField.svelte';
import type { Options } from '$lib/FieldDefinitions/Options';

export interface FieldInterface<T extends Options> {
	readonly name: string;
	readonly label: string;
	readonly options: Partial<T>;
	readonly formComponent: ComponentType;
	readonly viewComponent: ComponentType;
}

export class Field<T extends Options> implements FieldInterface<T> {
	public readonly name: string;
	public readonly label: string;
	public readonly options: Partial<T>;
	public readonly formComponent: ComponentType = DefaultFormFieldComponent;
	public readonly viewComponent: ComponentType = DefaultViewFieldComponent;

	constructor(name: string, label: string = '', options: Partial<T> = {}) {
		this.name = name;
		this.label = label ? label : name;

		options.required ??= true;
		options.disabled ??= false;
		this.options = options || {};
	}
}
