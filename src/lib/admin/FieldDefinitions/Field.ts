import type { ComponentType } from 'svelte';
import DefaultFieldComponent from '$lib/admin/Crud/FieldComponents/DefaultField.svelte';
import type { Options } from '$lib/admin/FieldDefinitions/Options';

export interface FieldInterface<T extends Options> {
	readonly name: string;
	readonly label: string;
	readonly options: Partial<T>;
	readonly formComponent: ComponentType;
}

export class Field<T extends Options> implements FieldInterface<T> {
	public readonly name: string;
	public readonly label: string;
	public readonly options: Partial<T>;
	public readonly formComponent: ComponentType = DefaultFieldComponent;

	constructor(name: string, label: string = '', options: Partial<T> = {}) {
		this.name = name;
		this.label = label ? label : name;

		options.required ??= true;
		options.disabled ??= false;
		this.options = options || {};
	}
}
