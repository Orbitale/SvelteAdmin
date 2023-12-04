// src/lib/BookCrud.ts
import {
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	Delete,
	Edit,
	List,
	New,
	TextareaField,
	TextField,
	UrlAction,
	View
} from '$lib';
import type { RequestParameters } from '$lib/genericTypes';

import { faker } from '@faker-js/faker';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';
import { type Book, getBook, getMemoryBooks } from './internal/booksInternal';
import {PaginatedResults} from "$lib/DataTable/Pagination.ts";

const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'Description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	})
];

const IdField = new TextField('id', 'ID');

const itemsPerPage = 10;

export const bookCrud = new CrudDefinition<Book>('books', {
	label: { singular: 'Book', plural: 'Books' },

	operations: [
		new List(
			[IdField, ...fields],
			[
				new UrlAction('View', '/admin/books/view', ViewIcon),
				new UrlAction('Edit', '/admin/books/edit', Pen),
				new UrlAction('Delete', '/admin/books/delete', TrashCan)
			],
			{
				globalActions: [new UrlAction('New', '/admin/books/new', Pen)],
				pagination: {
					enabled: true,
					itemsPerPage: itemsPerPage,
				}
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
			const id = requestParameters.id;
			getBook(id);
			const updatedBooks = getMemoryBooks().filter((b) => b.id.toString() !== id);
			window.localStorage.setItem('books', JSON.stringify(updatedBooks));

			return Promise.resolve();
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			const id = operation.name === 'edit' ? requestParameters.id : faker.string.uuid();
			const book = data as Book;
			book.id = id;
			let updatedBooks = getMemoryBooks();

			if (operation.name === 'new') {
				updatedBooks.push(book);
			} else {
				updatedBooks = updatedBooks.map((b) => (b.id.toString() === id.toString() ? book : b));
			}

			window.localStorage.setItem('books', JSON.stringify(updatedBooks));

			return Promise.resolve();
		}

		return Promise.resolve();
	}),

	stateProvider: new CallbackStateProvider<Book>(function (
		operation,
		requestParameters: RequestParameters = {}
	) {
		const books = getMemoryBooks();

		if (operation.name === 'list') {
			const page = parseInt((requestParameters.page||'1').toString());
			if (isNaN(page)) {
				throw new Error(`Invalid "page" value: expected a number, got "${page}".`);
			}
			const listBooks = books.slice(itemsPerPage * (page - 1), itemsPerPage * page);
			return Promise.resolve(new PaginatedResults(
				page,
				Math.ceil(books.length / itemsPerPage),
				books.length,
				listBooks,
			));
		}

		if (requestParameters.id !== undefined) {
			const ret = books.filter(
				(book: { id: string | number }) => book.id && book.id.toString() === requestParameters.id
			);

			return Promise.resolve(ret[0] || null);
		}

		if (operation.name !== 'edit' && operation.name !== 'view' && operation.name !== 'delete') {
			console.warn('StateProvider error: Unsupported Books Crud action "' + operation.name + '".');
		}

		return Promise.resolve(null);
	})
});
