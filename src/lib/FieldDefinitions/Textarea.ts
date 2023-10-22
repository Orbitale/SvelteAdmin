import type { ComponentType } from 'svelte';
import TextareaFieldComponent from '$lib/themes/carbon/FieldComponents/TextareaField.svelte';
import { Field } from '$lib/FieldDefinitions/Field';
import type { TextOptions } from '$lib/FieldDefinitions/Text';

export type TextareaOptions = TextOptions & {
	rows?: number;
};

export class TextareaField extends Field<TextareaOptions> {
	readonly formComponent: ComponentType = TextareaFieldComponent;
}
