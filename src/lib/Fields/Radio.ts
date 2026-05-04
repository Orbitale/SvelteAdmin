import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';
import type { ChoiceItem } from './Choice';

/** */
export type RadioOptions = CommonFieldOptions & {
	choices: Array<ChoiceItem>;
};

/** */
export class RadioField extends BaseField<RadioOptions> {
	readonly formComponent: FormFieldTheme = 'radio';
	readonly viewComponent: ViewFieldTheme = 'radio';
}
