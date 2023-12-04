
export class PaginatedResults<T> {
    constructor(
        public readonly currentPage: number,
        public readonly numberOfPages: number,
        public readonly numberOfItems: number,
        public readonly currentItems: Array<T>
    ) {
    }
}
