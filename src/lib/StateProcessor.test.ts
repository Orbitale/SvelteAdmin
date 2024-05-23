import { describe, it, expect } from 'vitest';
import { testOptions } from '$lib/TestOptions';
import {
	CallbackStateProcessor,
	BaseCrudOperation,
	type CrudOperation,
	type StateProcessorCallback
} from '$lib';

describe(
	'Callback State processor',
	() => {
		it(
			'executes the callback',
			async () => {
				let callbackCalled = false;
				const callback: StateProcessorCallback<boolean> = async (data) => {
					expect(callbackCalled).toBe(false);
					expect(data).toBe(false);
					callbackCalled = true;
				};
				const processor = new CallbackStateProcessor<boolean>(callback);
				expect(callbackCalled).toStrictEqual(false);

				await processor.process(false, mockOperation(), {});

				expect(callbackCalled).toStrictEqual(true);
			},
			testOptions
		);
	},
	testOptions
);

function mockOperation(): CrudOperation {
	return new (class extends BaseCrudOperation {
		constructor(...args: unknown[]) {
			// @ts-ignore
			super(...args);
		}
	})('', '', '', [], [], {});
}
