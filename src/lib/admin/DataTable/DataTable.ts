import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

import type { CrudAction } from '$lib/admin/Crud/actions.ts';
import type { Field } from '$lib/admin/FieldDefinitions/Field.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';
import type { Options } from '$lib/admin/FieldDefinitions/Options.ts';

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
