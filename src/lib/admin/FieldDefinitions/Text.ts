import type { ComponentType } from 'svelte';
import TextFieldComponent from '$lib/admin/Crud/FieldComponents/TextField.svelte';
import { Field } from '$lib/admin/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/admin/FieldDefinitions/Options';

export type TextOptions = CommonOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

export class TextField extends Field<TextOptions> {
	readonly formComponent: ComponentType = TextFieldComponent;
}
