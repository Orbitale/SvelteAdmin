import type { CrudOperation } from '$lib/Crud/Operations';
import type { KeyValueObject } from '$lib/genericTypes';

export type StateProviderResult<T> = Promise<T | Array<T> | null>;

export interface StateProvider<T> {
	provide(action: CrudOperation, requestParameters: KeyValueObject): StateProviderResult<T>;
}

export type StateProviderCallback<T> = (
	action: CrudOperation,
	requestParameters: KeyValueObject
) => StateProviderResult<T>;

export class CallbackStateProvider<T> implements StateProvider<T> {
	private readonly _callback: StateProviderCallback<T>;

	constructor(callback: StateProviderCallback<T>) {
		this._callback = callback;
	}

	provide(action: CrudOperation, requestParameters: KeyValueObject): StateProviderResult<T> {
		return this._callback(action, requestParameters);
	}
}
