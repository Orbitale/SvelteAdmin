// src/lib/BookCrud.ts
import { type CrudOperation, Delete, Edit, List } from '$lib/admin/Crud/Operations.ts';
import type { KeyValueObject } from '$lib/admin/genericTypes.ts';
import { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import { CallbackStateProcessor, type StateProcessorInput } from '$lib/admin/State/Processor.ts';
import { CallbackStateProvider, type StateProviderResult } from '$lib/admin/State/Provider.ts';
import { TextField } from '$lib/admin/FieldDefinitions/Text.ts';
import { TextareaField } from '$lib/admin/FieldDefinitions/Textarea.ts';
import { UrlAction } from '$lib/admin/actions.ts';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';

type Book = { id: number; title: string; description: string };
const books: Array<Book> = [
	{ id: 1, title: 'The Hobbit', description: 'Something' },
	{ id: 2, title: 'Dune', description: 'Something else' }
];

const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	})
];

const actions = [
	new UrlAction('Edit', '/admin/books/edit', Pen),
	new UrlAction('Delete', '/admin/books/delete', TrashCan)
];

export const bookCrud = new CrudDefinition('books', {
	label: { singular: 'Book', plural: 'Books' },

	operations: [
		new List(fields, actions),
		new Edit(fields, []),
		new Delete(fields, new UrlAction('List', '/admin/books/list'))
	],

	stateProcessor: new CallbackStateProcessor(function (data, operation, requestParameters = {}) {
		console.info('TODO: process new, edit or delete actions', {
			data,
			operation,
			requestParameters
		});
		if (operation.name === 'delete') {
			alert(
				`Book ${requestParameters.id} was requested for deletion, but it's only a demo app, so as everything is in memory, you will still see it, please forgive us :)`
			);
		}
	}),

	stateProvider: new CallbackStateProvider(function (operation, requestParameters: KeyValueObject = {}) {
		console.info('TODO: return actual data', { operation, requestParameters });

		if (operation.name === 'list') {
			return books;
		}

		if (requestParameters.id !== undefined) {
			const ret = books.filter(
				(book: { id: number }) => book.id && book.id.toString() === requestParameters.id
			);
			return ret[0] || null;
		}

		return null;
	})
});
