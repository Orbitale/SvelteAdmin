import type { FieldInterface } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

export type SectionOptions = Options & {
	headerType: 'default' | 'container';
};

export class Sections implements FieldInterface<SectionOptions> {
	public readonly name: string;
	public readonly label: string;
	public readonly fields: Array<FieldInterface<Options>>;
	public readonly options: Partial<SectionOptions>;
	public readonly formComponent: FormFieldTheme = 'section';
	public readonly viewComponent: ViewFieldTheme = 'section';

	constructor(
		name: string,
		label: string = '',
		fields: Array<FieldInterface<Options>> = [],
		options: SectionOptions = {} as SectionOptions
	) {
		this.name = name;
		this.label = label ? label : name;
		this.fields = fields;
		this.options = options || {};
	}
}
