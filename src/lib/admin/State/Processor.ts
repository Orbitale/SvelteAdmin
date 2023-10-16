import type { CrudAction } from '$lib/admin/Crud/actions.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';

export interface StateProcessor<T> {
	process(data: any, operation: CrudAction<T>, requestParameters: KeyValueObject): void;
}

export type StateProcessorCallback<T> = (
	data: any,
	operation: CrudAction<T>,
	requestParameters: KeyValueObject
) => void;

export class CallbackStateProcessor<T> implements StateProcessor<T> {
	private readonly _callback: StateProcessorCallback<T>;

	constructor(callback: StateProcessorCallback<T>) {
		this._callback = callback;
	}

	process(data: any, operation: CrudAction<T>, requestParameters: KeyValueObject): void {
		return this._callback(data, operation, requestParameters);
	}
}
