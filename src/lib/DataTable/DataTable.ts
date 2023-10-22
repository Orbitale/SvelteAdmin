import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

import type { CrudOperation } from '$lib/Crud/Operations.ts';
import type { Field } from '$lib/FieldDefinitions/Field.ts';
import type { KeyValueObject } from '$lib/genericTypes.ts';
import type { Options } from '$lib/FieldDefinitions/Options.ts';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow;
export type Rows = Array<Row>;

export function createEmptyRow(operation: CrudOperation<unknown>): Row {
	const fields: KeyValueObject = {};

	operation.fields.forEach((field: Field<Options>) => {
		fields[field.name] = '-';
	});

	return {
		id: 0,
		...fields
	};
}
