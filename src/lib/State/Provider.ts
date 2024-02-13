import type { CrudOperation } from '$lib/Crud/Operations';
import type { PaginatedResults } from '$lib/DataTable/Pagination';
import type { RequestParameters } from '$lib/request';

/** */
export type StateProviderResult<T> = Promise<T | PaginatedResults<T> | Array<T> | null>;

/** */
export interface StateProvider<T> {
	provide(action: CrudOperation, requestParameters: RequestParameters): StateProviderResult<T>;
}

/** */
export type StateProviderCallback<T> = (
	action: CrudOperation,
	requestParameters: RequestParameters
) => StateProviderResult<T>;

/** */
export class CallbackStateProvider<T> implements StateProvider<T> {
	private readonly _callback: StateProviderCallback<T>;

	constructor(callback: StateProviderCallback<T>) {
		this._callback = callback;
	}

	provide(action: CrudOperation, requestParameters: RequestParameters): StateProviderResult<T> {
		return this._callback(action, requestParameters);
	}
}
