import type { FieldInterface, FieldOptions } from '$lib/FieldDefinitions/definition';
import type { FormFieldTheme, ViewFieldTheme } from '$lib/themes/ThemeConfig';

/** */
export type ColumnOptions = FieldOptions & {
	name: string;
	label?: string;
};

/**
 *
 * @remark
 * The sizes and offsets are related to the grid used by your theme.<br>
 * For example, **Carbon** theme has a dynamic grid up from 4 to 16 columns
 * depending on viewport, while **Bootstrap**-based themes have 12 columns.
 */
export type ColumnedFields<FieldType = FieldInterface<FieldOptions>> = Array<{
	name?: string;
	label?: string;

	/** Size in proportion of the theme's grid configuration and full size */
	size?: number;
	/** Offset in proportion of the theme's grid configuration and full size */
	offset?: number;
	fields: Array<FieldType>;
}>;

/** */
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
