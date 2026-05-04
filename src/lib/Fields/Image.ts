import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type ImageOptions = InputFieldOptions & {
	alt?: string;
	width?: number;
	height?: number;
};

/** */
export class ImageField extends BaseField<ImageOptions> {
	readonly formComponent: FormFieldTheme = 'image';
	readonly viewComponent: ViewFieldTheme = 'image';
}
