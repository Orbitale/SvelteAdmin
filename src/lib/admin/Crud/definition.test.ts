import {describe, it, expect, type TestOptions} from 'vitest';
import {
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	List,
} from "$lib";

const testOpts: TestOptions = {repeats: process.env.REPEAT ? parseInt(process.env.REPEAT) : undefined};

type Book = {};

describe(
	'Crud definition',
	() => {
		it('can be instantiated with simple config', () => {
			const crud = new CrudDefinition<Book>('books', {
				label: {singular: '', plural: ''},
				operations: [new List([])],
				stateProvider: new CallbackStateProvider<Book>(() => null),
				stateProcessor: new CallbackStateProcessor<Book>(() => {}),
			});

			expect(crud).toBeDefined();
		});
		it('can be instantiated with simple config containing existing default operation name', () => {
			const crud = new CrudDefinition<Book>('books', {
				label: {singular: '', plural: ''},
				operations: [new List([])],
				defaultOperationName: 'list',
				stateProvider: new CallbackStateProvider<Book>(() => null),
				stateProcessor: new CallbackStateProcessor<Book>(() => {}),
			});

			expect(crud).toBeDefined();
		});

		it('cannot be instantiated without operations', () => {
			const construct = () => {
				new CrudDefinition<Book>('books', {
					label: {singular: '', plural: ''},
					operations: [],
					stateProvider: new CallbackStateProvider<Book>(() => null),
					stateProcessor: new CallbackStateProcessor<Book>(() => {}),
				});
			}

			expect(construct).toThrowError(/^Crud definition "books" has no Crud operations set\./g);
		});

		it('cannot be instantiated if operations list\'s first element is not properly set', () => {
			const construct = () => {
				const operations = Array(2);
				operations[1] = new List([]);
				new CrudDefinition<Book>('books', {
					label: {singular: '', plural: ''},
					operations: operations,
					stateProvider: new CallbackStateProvider<Book>(() => null),
					stateProcessor: new CallbackStateProcessor<Book>(() => {}),
				});
			}

			expect(construct).toThrowError(/^Crud definition "books" has an invalid default operation name "undefined"\./g);
		});

		it('cannot be instantiated if default operation name does not exist in operations list', () => {
			const construct = () => {
				const operations = Array(2);
				new CrudDefinition<Book>('books', {
					label: {singular: '', plural: ''},
					operations: [new List([])],
					defaultOperationName: 'edit',
					stateProvider: new CallbackStateProvider<Book>(() => null),
					stateProcessor: new CallbackStateProcessor<Book>(() => {}),
				});
			}

			expect(construct).toThrowError(/^Crud definition "books" has no default operation named "edit"\./g);
		});
	},
	testOpts
);
