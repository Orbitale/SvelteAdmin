import type { FieldInterface } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type TabOptions = Options & {
	headerType: 'default' | 'container';
};

export type TabbedFields<T = FieldInterface<Options>> = Array<{
	name: string;
	label?: string;
	fields: Array<T>
}>;

export class Tabs implements FieldInterface<TabOptions> {
	public readonly formComponent: FormFieldTheme = 'tabs';
	public readonly viewComponent: ViewFieldTheme = 'tabs';
	public readonly name: string = '';
	public readonly label: string = '';

	constructor(
		public readonly fields: TabbedFields = [],
		public readonly options: TabOptions = {} as TabOptions
	) {
	}
}
