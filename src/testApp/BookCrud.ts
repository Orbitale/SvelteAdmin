// src/lib/BookCrud.ts
import {
	Delete,
	Edit,
	List,
	New,
	View,
	CrudDefinition,
	CallbackStateProcessor,
	CallbackStateProvider,
	TextField,
	TextareaField,
	UrlAction
} from '$lib';
import type { KeyValueObject } from '$lib/genericTypes.js';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';

type Book = { id: number; title: string; description: string };
const books: Array<Book> = [
	{ id: 1, title: 'The Hobbit', description: 'In a hole, lived a hobbit' },
	{ id: 2, title: 'Dune', description: 'Pretty spicy' }
];

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

	stateProcessor: new CallbackStateProcessor(async function (
		data,
		operation,
		requestParameters = {}
	) {
		console.info(operation.name, requestParameters);
		if (operation.name === 'delete') {
			alert(
				`Book ${requestParameters.id} was requested for deletion, but it's only a demo app, so as everything is in memory, you will still see it, please forgive us :)`
			);

			return;
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			alert(
				'Submitted book ' +
					operation.name +
					'!\nHere are your data:\n' +
					JSON.stringify(data) +
					'\nYou should push this to a database via an API for example ;)'
			);

			return;
		}

		console.warn('Unsupported Books Crud action "' + operation.name + '".');
	}),

	stateProvider: new CallbackStateProvider(async function (
		operation,
		requestParameters: KeyValueObject = {}
	) {
		console.info(operation.name, requestParameters);
		if (operation.name === 'list') {
			return Promise.resolve(books);
		}

		if (requestParameters.id !== undefined) {
			const ret = books.filter(
				(book: { id: number }) => book.id && book.id.toString() === requestParameters.id
			);

			return Promise.resolve(ret[0] || null);
		}

		console.warn('Unsupported Books Crud action "' + operation.name + '".');
	})
});
