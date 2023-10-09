import type { CrudAction } from '../Crud/actions.ts';
import type { KeyValueObject } from '../generic_types.ts';

export type StateProviderResult = object | Array<any> | null;

export interface StateProvider {
	provide(action: CrudAction, requestParameters: KeyValueObject): StateProviderResult;
}

export type StateProviderCallback = (
	action: CrudAction,
	requestParameters: KeyValueObject
) => StateProviderResult;

export class CallbackStateProvider implements StateProvider {
	private readonly _callback: StateProviderCallback;

	constructor(callback: StateProviderCallback) {
		this._callback = callback;
	}

	provide(action: CrudAction, requestParameters: KeyValueObject): StateProviderResult {
		return this._callback(action, requestParameters);
	}
}
