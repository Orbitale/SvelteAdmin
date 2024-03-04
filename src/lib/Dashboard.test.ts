import { describe, it, expect } from 'vitest';
import {
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	DashboardDefinition,
	List
} from '$lib';
import { testOptions } from '$lib/TestOptions';

type Book = object;

describe(
	'Dashboard',
	() => {
		it('can be instantiated with simple config', () => {
			const dashboard = new DashboardDefinition({
				adminConfig: {},
				cruds: [
					new CrudDefinition<Book>({
						name: 'books',
						label: { singular: 'Book', plural: 'Books' },
						operations: [new List([])],
						stateProvider: new CallbackStateProvider<Book>(() => Promise.resolve(null)),
						stateProcessor: new CallbackStateProcessor<Book>(() => {})
					})
				]
			});

			expect(dashboard).toBeDefined();
		});
	},
	testOptions
);
