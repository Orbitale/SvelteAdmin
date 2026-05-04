import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';
import type { ChoiceItem } from './Choice';

/** */
export type MultiChoiceOptions = CommonFieldOptions & {
	choices: Array<ChoiceItem>;
	placeholder?: string;
};

/** */
export class MultiChoiceField extends BaseField<MultiChoiceOptions> {
	readonly formComponent: FormFieldTheme = 'multi_choice';
	readonly viewComponent: ViewFieldTheme = 'multi_choice';
}
