import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

import type { CrudOperation } from '$lib/Crud/Operations';
import type { Field } from '$lib/FieldDefinitions/Field';
import type { KeyValueObject } from '$lib/genericTypes';
import type { Options } from '$lib/FieldDefinitions/Options';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow & {
	__operation: CrudOperation;
};
export type Rows = Array<Row>;

export function createEmptyRow(operation: CrudOperation): Row {
	const fields: KeyValueObject = {};

	operation.fields.forEach((field: Field<Options>) => {
		fields[field.name] = '-';
	});

	return {
		id: 0,
		__operation: operation,
		...fields
	};
}
