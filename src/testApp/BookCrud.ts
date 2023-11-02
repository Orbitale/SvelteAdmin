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
import type { KeyValueObject } from '$lib/genericTypes';
import { v4 as uuid4 } from 'uuid';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';
import { type Book, getBook, getMemoryBooks } from './internal/booksInternal';

const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'Description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	})
];

export const bookCrud = new CrudDefinition('books', {
	label: { singular: 'Book', plural: 'Books' },

	operations: [
		new List(
			fields,
			[
				new UrlAction('View', '/admin/books/view', ViewIcon),
				new UrlAction('Edit', '/admin/books/edit', Pen),
				new UrlAction('Delete', '/admin/books/delete', TrashCan)
			],
			[],
			{
				globalActions: [new UrlAction('New', '/admin/books/new', Pen)]
			}
		),
		new View(fields),
		new New(fields),
		new Edit(fields),
		new Delete(fields, new UrlAction('List', '/admin/books/list'))
	],

	stateProcessor: new CallbackStateProcessor(function (data, operation, requestParameters = {}) {
		if (operation.name === 'delete') {
			const id = requestParameters.id;
			getBook(id);
			const updatedBooks = getMemoryBooks().filter((b) => b.id.toString() !== id);
			window.localStorage.setItem('books', JSON.stringify(updatedBooks));

			return Promise.resolve();
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			const id = operation.name === 'edit' ? requestParameters.id : uuid4();
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
		requestParameters: KeyValueObject = {}
	) {
		const books = getMemoryBooks();

		if (operation.name === 'list') {
			return Promise.resolve(books);
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

		return Promise.resolve();
	})
});
