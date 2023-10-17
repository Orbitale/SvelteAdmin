import { describe, it, expect, type TestOptions } from 'vitest';
import {
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	DashboardDefinition,
	List
} from '$lib';

import { emptyAdminConfig } from '$lib/admin/config/adminConfig.ts';

const testOpts: TestOptions = {
	repeats: process.env.REPEAT ? parseInt(process.env.REPEAT) : undefined
};

type Book = {};

describe(
	'Dashboard',
	() => {
		it('can be instantiated with simple config', () => {
			const dashboard = new DashboardDefinition<Book>({
				adminConfig: emptyAdminConfig(),
				cruds: [
					new CrudDefinition<Book>('books', {
						label: { singular: 'Book', plural: 'Books' },
						operations: [new List([])],
						stateProvider: new CallbackStateProvider<Book>(() => null),
						stateProcessor: new CallbackStateProcessor<Book>(() => {})
					})
				]
			});

			expect(dashboard).toBeDefined();
		});
	},
	testOpts
);
