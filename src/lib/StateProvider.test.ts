import { describe, it, expect } from 'vitest';
import { CallbackStateProvider, BaseCrudOperation, type CrudOperation } from '$lib/index.js';

describe('Callback State Provider', () => {
	it('executes the callback', async () => {
		const provider = new CallbackStateProvider<boolean>(async () => true);

		const value = await provider.provide(mockOperation(), {});

		expect(value).toBe(true);
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
