import type { CrudOperation } from '$lib/Crud/Operations';
import type { RequestParameters } from '$lib/request';

export type StateProcessorInput<T> = T | Array<T> | null;

export interface StateProcessor<T> {
	process(
		data: StateProcessorInput<T>,
		operation: CrudOperation,
		requestParameters: RequestParameters
	): Promise<void>;
}

export type StateProcessorCallback<T> = (
	data: StateProcessorInput<T>,
	operation: CrudOperation,
	requestParameters: RequestParameters
) => void;

export class CallbackStateProcessor<T> implements StateProcessor<T> {
	private readonly _callback: StateProcessorCallback<T>;

	constructor(callback: StateProcessorCallback<T>) {
		this._callback = callback;
	}

	process(
		data: StateProcessorInput<T>,
		operation: CrudOperation,
		requestParameters: RequestParameters
	): Promise<void> {
		return new Promise((resolver) => {
			this._callback(data, operation, requestParameters);
			return resolver;
		});
	}
}
