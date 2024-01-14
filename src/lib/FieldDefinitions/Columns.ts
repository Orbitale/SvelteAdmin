import type {FieldInterface, FieldOptions} from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/**
 * The sizes are related to the grid used by your theme.
 * Carbon theme has a dynamic grid up from 4 to 16 columns depending on viewport,
 * while Bootstrap-based ones have 12 columns.
 */
export type ColumnOptions = FieldOptions & {
	name: string;
	label?: string;
};

export type ColumnedFields<T = FieldInterface<ColumnOptions>> = Array<{
	name?: string;
	label?: string;
	size?: number;
	offset?: number;
	fields: Array<T>;
}>;

export class Columns implements FieldInterface<ColumnOptions> {
	public readonly formComponent: FormFieldTheme = 'column';
	public readonly viewComponent: ViewFieldTheme = 'column';

	constructor(
		public readonly name: string,
		public readonly label: string = '',
		public readonly fields: ColumnedFields = [],
		public readonly options: ColumnOptions = {} as ColumnOptions
	) {}
}
