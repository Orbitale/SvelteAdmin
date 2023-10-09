import type { CrudAction } from '../Crud/actions.ts';
import type { KeyValueObject } from '../generic_types.ts';

export interface StateProcessor {
	process(data: any, operation: CrudAction, requestParameters: KeyValueObject): void;
}

export type StateProcessorCallback = (
	data: any,
	operation: CrudAction,
	requestParameters: KeyValueObject
) => void;

export class CallbackStateProcessor implements StateProcessor {
	private readonly _callback: StateProcessorCallback;

	constructor(callback: StateProcessorCallback) {
		this._callback = callback;
	}

	process(data: any, operation: CrudAction, requestParameters: KeyValueObject): void {
		return this._callback(data, operation, requestParameters);
	}
}
