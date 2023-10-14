// src/lib/BookCrud.ts
import { type CrudAction, DeleteAction, EditAction, ListAction } from '$lib/admin/Crud/actions.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';
import { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import { CallbackStateProcessor } from '$lib/admin/State/Processor.ts';
import { CallbackStateProvider } from '$lib/admin/State/Provider.ts';
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

	actions: [
		new ListAction(fields, actions),
		new EditAction(fields, []),
		new DeleteAction(fields, new UrlAction('List', '/admin/books/list'))
	],

	stateProcessor: new CallbackStateProcessor(function (
		data: any,
		operation: CrudAction,
		requestParameters: KeyValueObject = {}
	) {
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

	stateProvider: new CallbackStateProvider<Book>(function (
		operation: CrudAction,
		requestParameters: KeyValueObject = {}
	) {
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
