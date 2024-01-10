// src/lib/TestCrud.ts
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
	View,
	PaginatedResults,
	CheckboxField,
	NumberField,
	ToggleField,
	UrlField,
	CallbackAction,
	Columns,
	Tabs
} from '$lib';
import type { RequestParameters } from '$lib/request';

import { faker } from '@faker-js/faker';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';
import { type Test, getTest, getMemoryTests } from './internal/testsInternal';

const itemsPerPage = 10;

const fields = [
	new TextField('text_field', 'Text field', {
		placeholder: 'This is a placeholder',
		help: 'This is a help message!'
	}),
	new TextareaField('textarea_field', 'Textarea description', {
		placeholder: 'This is also a placeholder',
		help: 'This is a help message!'
	}),
	new CheckboxField('checkbox_field', 'Checkbox field'),
	new NumberField('number_field', 'Number field'),
	new ToggleField('toggle_field', 'Toggle field'),
	new UrlField('url_field', 'Url field', { openInNewTab: true }),
	new UrlField('path_field', 'Path-URL field'),
	new Columns('columns_field', 'Columns field', [
		{
			name: 'column_1',
			label: 'Column 1',
			fields: [new TextField('column1_text_field', 'Text field in column 1')]
		},
		{
			name: 'column_2',
			label: 'Column 2',
			fields: [new TextField('column2_text_field', 'Text field in column 2')]
		}
	]),
	new Tabs('tabs_fields', 'Tabs field', [
		{
			name: 'tab_1',
			label: 'Tab 1',
			fields: [new TextField('tab1_text_field', 'Text field in tab 1')]
		},
		{
			name: 'tab_2',
			label: 'Tab 2',
			fields: [new TextField('tab2_text_field', 'Text field in tab 2')]
		}
	])
];

const IdField = new TextField('id', 'ID');

export const testCrud = new CrudDefinition<Test>('tests', {
	label: { singular: 'Test', plural: 'Tests' },

	operations: [
		new List(
			[IdField, ...fields],
			[
				new UrlAction('View', '/admin/tests/view', ViewIcon),
				new UrlAction('Edit', '/admin/tests/edit', Pen),
				new UrlAction('Delete', '/admin/tests/delete', TrashCan)
			],
			{
				globalActions: [
					new UrlAction('New', '/admin/tests/new', Pen),
					new CallbackAction('Reset memory data', TrashCan, () => {
						window.localStorage.removeItem('tests');
						window.location.reload();
					})
				],
				pagination: {
					enabled: true,
					itemsPerPage: 10
				}
			}
		),
		new View([IdField, ...fields]),
		new New(fields),
		new Edit(fields),
		new Delete(fields, new UrlAction('List', '/admin/tests/list'))
	],

	stateProcessor: new CallbackStateProcessor(function (
		data,
		operation,
		requestParameters: RequestParameters = {}
	) {
		if (operation.name === 'delete') {
			const id = (requestParameters.id || '').toString();
			getTest(id);
			const updatedTests = getMemoryTests().filter((b: Test) => b.id.toString() !== id);
			window.localStorage.setItem('tests', JSON.stringify(updatedTests));

			return Promise.resolve();
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			const id =
				operation.name === 'edit' ? (requestParameters.id || '').toString() : faker.string.uuid();
			const test = data as Test;
			test.id = id;
			let updatedTests = getMemoryTests();

			if (operation.name === 'new') {
				updatedTests.push(test);
			} else {
				updatedTests = updatedTests.map((b: Test) =>
					b.id.toString() === id.toString() ? test : b
				);
			}

			window.localStorage.setItem('tests', JSON.stringify(updatedTests));

			return Promise.resolve();
		}

		return Promise.resolve();
	}),

	stateProvider: new CallbackStateProvider<Test>(async function (
		operation,
		requestParameters: RequestParameters = {}
	) {
		const tests = getMemoryTests();

		if (operation.name === 'list') {
			const page = parseInt((requestParameters.page || '1').toString());
			if (isNaN(page)) {
				throw new Error(`Invalid "page" value: expected a number, got "${page}".`);
			}

			const listTests = tests.slice(itemsPerPage * (page - 1), itemsPerPage * page);

			return new PaginatedResults(
				page,
				Math.ceil(tests.length / itemsPerPage),
				tests.length,
				listTests
			);
		}

		if (requestParameters.id !== undefined) {
			const ret = tests.filter(
				(test: { id: string | number }) => test.id && test.id.toString() === requestParameters.id
			);

			return Promise.resolve(ret[0] || null);
		}

		if (operation.name !== 'edit' && operation.name !== 'view' && operation.name !== 'delete') {
			console.warn('StateProvider error: Unsupported Tests Crud action "' + operation.name + '".');
		}

		return Promise.resolve(null);
	})
});
