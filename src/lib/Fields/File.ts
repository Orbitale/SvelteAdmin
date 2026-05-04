import type { InputFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type FileOptions = InputFieldOptions & {
	downloadLabel?: string;
};

/** */
export class FileField extends BaseField<FileOptions> {
	readonly formComponent: FormFieldTheme = 'file';
	readonly viewComponent: ViewFieldTheme = 'file';
}
