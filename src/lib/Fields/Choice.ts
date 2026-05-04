import type { CommonFieldOptions, FormFieldTheme, ViewFieldTheme } from '$lib';
import { BaseField } from '$lib/Fields';

/** */
export type ChoiceItem = {
	label: string;
	value: string | number;
	disabled?: boolean;
};

/** */
export type ChoiceOptions = CommonFieldOptions & {
	choices: Array<ChoiceItem>;
	placeholder?: string;
};

/** */
export class ChoiceField extends BaseField<ChoiceOptions> {
	readonly formComponent: FormFieldTheme = 'choice';
	readonly viewComponent: ViewFieldTheme = 'choice';
}
