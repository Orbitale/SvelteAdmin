import type { ComponentType } from 'svelte';
import TextareaFieldComponent from '$lib/admin/Crud/FieldComponents/TextareaField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { TextOptions } from '$lib/admin/FieldDefinitions/Text';

export type TextareaOptions = TextOptions & {
	rows?: number;
};

export class TextareaField extends Field<TextareaOptions> {
	readonly formComponent: ComponentType = TextareaFieldComponent;
}
