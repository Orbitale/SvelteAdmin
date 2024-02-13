/** */
export class PaginatedResults<EntityType> {
	constructor(
		public readonly currentPage: number,
		public readonly numberOfPages: number,
		public readonly numberOfItems: number,
		public readonly currentItems: Array<EntityType>
	) {}
}

/** */
export type PaginationOptions = {
	enabled: boolean;
	itemsPerPage: number;
};

/** */
export function defaultPaginationOptions(): PaginationOptions {
	return {
		enabled: true,
		itemsPerPage: 10
	};
}
