// src/lib/BookCrud.ts
import {
	CallbackAction,
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	Delete,
	Edit,
	List,
	New,
	PaginatedResults,
	TextareaField,
	TextField,
	TextFilter,
	UrlAction,
	View,
	type RequestParameters,
	DateField
} from '$lib';

import { faker } from '@faker-js/faker';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';
import { type Book, getStorage } from './internal/booksInternal';

const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title", sortable: true }),
	new TextareaField('description', 'Description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	}),
	new DateField('publishedAt', 'Published at', { sortable: true })
];

const IdField = new TextField('id', 'ID');

const itemsPerPage = 10;

function randomWait(maxMilliseconds: number) {
	return new Promise((resolve: (...args: unknown[]) => unknown) =>
		setTimeout(resolve, Math.random() * maxMilliseconds)
	);
}

export const bookCrud = new CrudDefinition<Book>({
	name: 'books',
	label: { singular: 'Book', plural: 'Books' },
	minStateLoadingTimeMs: 400,

	operations: [
		new List(
			[IdField, ...fields],
			[
				new UrlAction('View', '/admin/books/view', ViewIcon),
				new UrlAction('Edit', '/admin/books/edit', Pen),
				new UrlAction('Delete', '/admin/books/delete', TrashCan)
			],
			{
				globalActions: [
					new CallbackAction(
						'Reset memory data',
						TrashCan,
						() => {
							window.localStorage.removeItem('books');
							window.location.reload();
						},
						{ buttonKind: 'ghost' }
					),
					new UrlAction('New', '/admin/books/new', Pen)
				],
				pagination: {
					enabled: true,
					itemsPerPage: itemsPerPage
				},
				filters: [
					new TextFilter('title', 'Title contains'),
					new TextFilter('description', 'Description contains')
				]
			}
		),
		new View([IdField, ...fields]),
		new New(fields),
		new Edit(fields),
		new Delete(fields, new UrlAction('List', '/admin/books/list'))
	],

	stateProcessor: new CallbackStateProcessor(function (
		data,
		operation,
		requestParameters: RequestParameters = {}
	) {
		if (operation.name === 'delete') {
			const id = (requestParameters.id || '').toString();
			getStorage().remove(id);

			return Promise.resolve();
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			const id =
				operation.name === 'edit' ? (requestParameters.id || '').toString() : faker.string.uuid();
			const entity = data as Book;
			entity.id = id;

			if (operation.name === 'new') {
				getStorage().add(entity);
			} else {
				getStorage().update(entity);
			}

			return Promise.resolve();
		}

		console.error('StateProcessor error: Unsupported Books Crud action "' + operation.name + '".');

		return Promise.resolve();
	}),

	stateProvider: new CallbackStateProvider<Book>(async function (
		operation,
		requestParameters: RequestParameters = {}
	) {
		console.info('Books provider called', { operation: operation.name, requestParameters });

		if (operation.name === 'list') {
			const page = parseInt((requestParameters.page || '1').toString());
			if (isNaN(page)) {
				throw new Error(`Invalid "page" value: expected a number, got "${page}".`);
			}

			let entities = getStorage().all();
			const filters = requestParameters.filters;
			if (filters) {
				entities = entities.filter((entity) => {
					if (filters.title && !entity.title.match(new RegExp(filters.title.toString(), 'gi'))) {
						return false;
					}
					if (
						filters.description &&
						!entity.description.match(new RegExp(filters.description.toString(), 'gi'))
					) {
						return false;
					}

					return true;
				});
			}

			console.info('Sort: ', requestParameters.sort);

			if (requestParameters.sort) {
				if (!requestParameters.sort?.title && !requestParameters.sort?.publishedAt) {
					console.warn('Sorting not supported for these sort parameters:');
					console.warn(requestParameters.sort);
				}

				// Apply sorting
				Object.entries(requestParameters.sort).forEach((sort) => {
					const field: keyof Book = sort[0] as keyof Book;
					const order: 'ASC' | 'DESC' = sort[1] as 'ASC' | 'DESC';

					entities = entities.sort(function (a: Book, b: Book) {
						const inverser = order === 'ASC' ? 1 : -1;
						return inverser * String(a[field]).localeCompare(String(b[field]));
					});
				});
			}

			const listEntities = entities.slice(itemsPerPage * (page - 1), itemsPerPage * page);

			await randomWait(500);

			return new PaginatedResults(
				page,
				Math.ceil(entities.length / itemsPerPage),
				entities.length,
				listEntities
			);
		}

		if (operation.name === 'edit' || operation.name === 'view') {
			return Promise.resolve(getStorage().get((requestParameters?.id || '').toString()));
		}

		if (operation.name === 'entity_view') {
			return Promise.resolve(getStorage().get((requestParameters?.field_value || '').toString()));
		}

		if (operation.name === 'entity_list') {
			return Promise.resolve(getStorage().all());
		}

		console.error('StateProvider error: Unsupported Books Crud action "' + operation.name + '".');

		return Promise.resolve(null);
	})
});
