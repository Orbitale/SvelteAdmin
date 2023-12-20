export class PaginatedResults<T> {
	constructor(
		public readonly currentPage: number,
		public readonly numberOfPages: number,
		public readonly numberOfItems: number,
		public readonly currentItems: Array<T>
	) {}
}

export type PaginationOptions = {
	enabled: boolean;
	itemsPerPage: number;
};

export function defaultPaginationOptions(): PaginationOptions {
	return {
		enabled: true,
		itemsPerPage: 10
	};
}
