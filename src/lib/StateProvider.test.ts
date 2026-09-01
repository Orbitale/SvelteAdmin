import { describe, it, expect } from 'vitest';
import { CallbackStateProvider, BaseCrudOperation, type CrudOperation } from '$lib';

describe(
	'Callback State Provider',
	() => {
		it(
			'executes the callback',
			async () => {
				const provider = new CallbackStateProvider<boolean>(async () => true);

				const value = await provider.provide(mockOperation(), {});

				expect(value).toBe(true);
			}
		);
	}
);

function mockOperation(): CrudOperation {
	return new (class extends BaseCrudOperation {
		constructor(...args: unknown[]) {
			// @ts-ignore
			super(...args);
		}
	})('', '', '', [], [], {});
}
