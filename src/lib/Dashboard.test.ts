import { describe, it, expect } from 'vitest';
import { CallbackStateProcessor } from '$lib/StateProcessor.js';
import { CallbackStateProvider } from '$lib/StateProvider.js';
import { CrudDefinition } from '$lib/Crud/CrudDefinition.js';
import { DashboardDefinition } from '$lib/Dashboard.js';
import { List } from '$lib/Crud/Operations.js';
import carbon from '$lib/themes/svelte/carbon/theme.js';

type Book = object;

describe('Dashboard', () => {
	it('can be instantiated with simple config', () => {
		const dashboard = new DashboardDefinition({
			theme: carbon,
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

	it('has a properly defined first action', () => {
		const dashboard = new DashboardDefinition({
			theme: carbon,
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
		expect(dashboard.getFirstActionUrl()).toBe('/books/list');
	});

	it('fails when two cruds have the same name', () => {
		const createDashboard = () => {
			new DashboardDefinition({
				theme: carbon,
				adminConfig: {},
				cruds: [
					new CrudDefinition<Book>({
						name: 'books',
						label: { singular: 'Book', plural: 'Books' },
						operations: [new List([])],
						stateProvider: new CallbackStateProvider<Book>(() => Promise.resolve(null)),
						stateProcessor: new CallbackStateProcessor<Book>(() => {})
					}),
					new CrudDefinition<Book>({
						name: 'books',
						label: { singular: 'Book', plural: 'Books' },
						operations: [new List([])],
						stateProvider: new CallbackStateProvider<Book>(() => Promise.resolve(null)),
						stateProcessor: new CallbackStateProcessor<Book>(() => {})
					})
				]
			});
		};
		expect(createDashboard).toThrow(
			'Crud name "books" is used in at least two different Crud objects. Crud names must be unique.'
		);
	});
});
