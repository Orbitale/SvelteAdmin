import type { CrudAction } from '$lib/admin/Crud/actions.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';

export type StateProviderResult<T> = T | Array<T> | null;

export interface StateProvider<T> {
	provide(action: CrudAction<T>, requestParameters: KeyValueObject): StateProviderResult<T>;
}

export type StateProviderCallback<T> = (
	action: CrudAction<T>,
	requestParameters: KeyValueObject
) => StateProviderResult<T>;

export class CallbackStateProvider<T> implements StateProvider<T> {
	private readonly _callback: StateProviderCallback<T>;

	constructor(callback: StateProviderCallback<T>) {
		this._callback = callback;
	}

	provide(action: CrudAction<T>, requestParameters: KeyValueObject): StateProviderResult<T> {
		return this._callback(action, requestParameters);
	}
}
