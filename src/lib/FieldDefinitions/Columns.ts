import type { FieldInterface } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/**
 * The sizes are related to the grid used by your theme.
 * Carbon theme has a dynamic grid up from 4 to 16 columns depending on viewport,
 * while Bootstrap-based ones have 12 columns.
 */
export type ColumnOptions = Options;

export type ColumnedFields<T = FieldInterface<Options>> = Array<{
	name: string;
	label?: string;
	size?: number;
	offset?: number;
	fields: Array<T>
}>;

export class Columns implements FieldInterface<ColumnOptions> {
	public readonly formComponent: FormFieldTheme = 'column';
	public readonly viewComponent: ViewFieldTheme = 'column';
	public readonly name: string = '';
	public readonly label: string = '';

	constructor(
		public readonly fields: ColumnedFields = [],
		public readonly options: ColumnOptions = {} as ColumnOptions
	) {
	}
}
