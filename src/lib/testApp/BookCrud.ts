// src/lib/BookCrud.ts

import { type CrudAction, ListAction } from '$lib/admin/Crud/actions.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';
import { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import { CallbackStateProcessor } from '$lib/admin/State/Processor.ts';
import { CallbackStateProvider } from '$lib/admin/State/Provider.ts';
import { TextField } from '$lib/admin/FieldDefinitions/Text.ts';
import { TextareaField } from '$lib/admin/FieldDefinitions/Textarea.ts';
import { CheckboxField } from '$lib/admin/FieldDefinitions/Checkbox.ts';

function process(data: any, operation: CrudAction, requestParameters: KeyValueObject) {
	console.info('TODO: process new, edit or delete actions', { data, operation, requestParameters });
}

function provide(operation: CrudAction, requestParameters: KeyValueObject): Array<any> {
	console.info('TODO: return actual data', { operation, requestParameters });

	return [];
}

let fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	}),
	new CheckboxField('agree', 'Agree to terms', {
		help: 'Check this to agree to the terms of publishing a book on this platform'
	})
];

export const bookCrud = new CrudDefinition('books', {
	label: 'Books',
	actions: [new ListAction(fields)],
	stateProcessor: new CallbackStateProcessor(process),
	stateProvider: new CallbackStateProvider(provide)
});
