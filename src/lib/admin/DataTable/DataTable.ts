import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';
import type { CrudAction } from '../Crud/actions.ts';
import type { Field } from '../FieldDefinitions/Field.ts';
import type { KeyValueObject } from '../generic_types.ts';
import type { Options } from '../FieldDefinitions/Options.ts';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow;
export type Rows = Array<Row>;

export function createEmptyRow(action: CrudAction): Row {
	const fields: KeyValueObject = {};

	action.fields.forEach((field: Field<Options>) => {
		fields[field.name] = '-';
	});

	return {
		id: 0,
		...fields
	};
}
