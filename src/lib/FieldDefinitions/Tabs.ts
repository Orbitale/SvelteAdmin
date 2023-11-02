import type { FieldInterface } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type TabOptions = Options & {
	headerType: 'default' | 'container';
};

export class Tabs implements FieldInterface<TabOptions> {
	public readonly name: string;
	public readonly label: string;
	public readonly fields: Array<FieldInterface<Options>>;
	public readonly options: Partial<TabOptions>;
	public readonly formComponent: FormFieldTheme = 'tabs';
	public readonly viewComponent: ViewFieldTheme = 'tabs';

	constructor(
		name: string,
		label: string = '',
		fields: Array<FieldInterface<Options>> = [],
		options: TabOptions = {} as TabOptions
	) {
		this.name = name;
		this.label = label ? label : name;
		this.fields = fields;
		this.options = options || {};
	}
}
