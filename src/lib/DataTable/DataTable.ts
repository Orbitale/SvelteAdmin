import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

import type { CrudOperation } from '$lib/Crud/Operations';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow & {
	__operation: CrudOperation;
};
export type Rows = Array<Row>;
