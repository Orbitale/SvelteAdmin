import { describe, it, expect } from 'vitest';
import { BaseCrudOperation, type CrudOperation } from '$lib/Crud/Operations.js';
import { CallbackStateProcessor, type StateProcessorCallback } from '$lib/StateProcessor.js';

describe('Callback State processor', () => {
	it('executes the callback', async () => {
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
	});
});

function mockOperation(): CrudOperation {
	return new (class extends BaseCrudOperation {
		constructor(...args: unknown[]) {
			// @ts-expect-error because of spread args needing tuple types
			super(...args);
		}
	})('', '', '', [], [], {});
}
