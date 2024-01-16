import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

import type { CrudOperation } from '$lib/Crud/Operations';
import type { CommonFieldOptions, Field } from '$lib/FieldDefinitions/definition';
import type { KeyValueObject } from '$lib/genericTypes';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow & {
	__operation: CrudOperation;
};
export type Rows = Array<Row>;

export function createEmptyRow(operation: CrudOperation): Row {
	const fields: KeyValueObject = {};

	operation.fields.forEach((field: Field<CommonFieldOptions>) => {
		fields[field.name] = '-';
	});

	return {
		id: 0,
		__operation: operation,
		...fields
	};
}
