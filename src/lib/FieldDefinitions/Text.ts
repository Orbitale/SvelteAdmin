import type { ComponentType } from 'svelte';
import TextFieldComponent from '$lib/themes/carbon/FieldComponents/TextField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { CommonOptions } from '$lib/FieldDefinitions/Options';

export type TextOptions = CommonOptions & {
	maxLength?: number;
	stripTags?: boolean;
};

export class TextField extends Field<TextOptions> {
	readonly formComponent: ComponentType = TextFieldComponent;
}
