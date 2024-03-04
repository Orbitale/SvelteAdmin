import type { CrudOperation } from '$lib/Crud/Operations';

export type DataTableKey = string;

export type DataTableValue = unknown;

export type BaseDataTableHeader = {
	key: DataTableKey;
	[key: string]: unknown;
};

export type DataTableEmptyHeader = BaseDataTableHeader & {
	empty: boolean;
};

export type DataTableNonEmptyHeader = BaseDataTableHeader & {
	value: DataTableValue;
};

export type DataTableHeader = DataTableEmptyHeader | DataTableNonEmptyHeader;

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = {
	__operation: CrudOperation;
	id: number | string;
	[key: string]: DataTableValue;
};
export type Rows = Array<Row>;
