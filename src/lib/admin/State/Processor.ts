import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
import type { KeyValueObject } from '$lib/admin/genericTypes.ts';

export type StateProcessorInput<T> = T | Array<T> | null;

export interface StateProcessor<T> {
	process(
		data: StateProcessorInput<T>,
		operation: CrudOperation<T>,
		requestParameters: KeyValueObject
	): void;
}

export type StateProcessorCallback<T> = (
	data: StateProcessorInput<T>,
	operation: CrudOperation<T>,
	requestParameters: KeyValueObject
) => void;

export class CallbackStateProcessor<T> implements StateProcessor<T> {
	private readonly _callback: StateProcessorCallback<T>;

	constructor(callback: StateProcessorCallback<T>) {
		this._callback = callback;
	}

	process(
		data: StateProcessorInput<T>,
		operation: CrudOperation<T>,
		requestParameters: KeyValueObject
	): void {
		return this._callback(data, operation, requestParameters);
	}
}
