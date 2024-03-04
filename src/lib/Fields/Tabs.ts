import type { FieldInterface, FieldOptions } from '$lib/Fields';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/types';

/** */
export type TabOptions = FieldOptions & {
	name: string;
	label?: string;
};

/** */
export type TabbedFields<T = FieldInterface<FieldOptions>> = Array<{
	name: string;
	label?: string;
	fields: Array<T>;
}>;

/** */
export class Tabs implements FieldInterface<TabOptions> {
	public readonly formComponent: FormFieldTheme = 'tabs';
	public readonly viewComponent: ViewFieldTheme = 'tabs';

	constructor(
		public readonly name: string,
		public readonly label: string = '',
		public readonly fields: TabbedFields = [],
		public readonly options: TabOptions = {} as TabOptions
	) {}
}
