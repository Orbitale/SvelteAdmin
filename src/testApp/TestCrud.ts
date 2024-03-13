import { faker } from '@faker-js/faker';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';

import {
	BooleanFilter,
	CallbackAction,
	CallbackStateProcessor,
	CallbackStateProvider,
	CheckboxField,
	Columns,
	CrudDefinition,
	DateField,
	DateFilter,
	Delete,
	Edit,
	ExistsFilter,
	List,
	New,
	NumberField,
	NumericFilter,
	KeyValueObjectField,
	PaginatedResults,
	success,
	Tabs,
	TextareaField,
	TextField,
	TextFilter,
	ToggleField,
	UrlAction,
	UrlField,
	View,
	CrudEntityField,
	type RequestParameters,
	type FieldInterface,
	type FieldOptions
} from '$lib';

import { type Test, getMemoryTests } from './internal/testsInternal';

const itemsPerPage = 10;

const baseFields: Array<FieldInterface<FieldOptions>> = [
	new TextField('text_field', 'Text field', {
		placeholder: 'This is a placeholder',
		help: 'This is a help message!'
	}),
	new CheckboxField('checkbox_field', 'Checkbox field'),
	new NumberField('number_field', 'Number field'),
	new ToggleField('toggle_field', 'Toggle field'),
	new UrlField('url_field', 'Url field', { openInNewTab: true }),
	new UrlField('path_field', 'Path-URL field'),
	new DateField('date_field', 'Date field'),
	new CrudEntityField('crud_entity_field', 'Crud entity field (book)', {
		crud_name: 'books',
		get_provider_operation: {
			entity_field: 'title'
		},
		list_provider_operation: {
			label_field: 'title',
			value_field: 'id'
		}
	}),
	new KeyValueObjectField('key_value_object_field', 'Key Value Object field', 'data1')
];

const fullFields = [
	...baseFields,
	new TextareaField('textarea_field', 'Textarea description', {
		placeholder: 'This is also a placeholder',
		help: 'This is a help message!'
	}),
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

export const testCrud = new CrudDefinition<Test>({
	name: 'tests',
	label: { singular: 'Test', plural: 'Tests' },

	operations: [
		new List(
			[IdField, ...baseFields],
			[
				new UrlAction('View', '/admin/tests/view', ViewIcon),
				new UrlAction('Edit', '/admin/tests/edit', Pen),
				new UrlAction('Delete', '/admin/tests/delete', TrashCan)
			],
			{
				globalActions: [
					new CallbackAction(
						'Reset memory data',
						TrashCan,
						() => {
							window.localStorage.removeItem('tests');
							window.location.reload();
						},
						{ buttonKind: 'ghost' }
					),
					new UrlAction('New', '/admin/tests/new', Pen)
				],
				filters: [
					new TextFilter('text_field', 'Filter text'),
					new BooleanFilter('checkbox_field', 'Filter checkbox'),
					new DateFilter('date_field', 'Filter date'),
					new ExistsFilter('toggle_field', 'Filter toggle'),
					new NumericFilter('number_field', 'Filter number')
				],
				pagination: {
					enabled: true,
					itemsPerPage: 10
				}
			}
		),
		new View([IdField, ...fullFields]),
		new New(fullFields),
		new Edit(fullFields),
		new Delete([], new UrlAction('List', '/admin/tests/list'))
	],

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

		if (operation.name === 'edit' || operation.name === 'view') {
			const ret = tests.filter(
				(test: { id: string | number }) => test.id && test.id.toString() === requestParameters.id
			);

			return Promise.resolve(ret[0] || null);
		}

		console.error('StateProvider error: Unsupported Tests Crud action "' + operation.name + '".');

		return Promise.resolve(null);
	}),

	stateProcessor: new CallbackStateProcessor(function (
		data,
		operation,
		requestParameters: RequestParameters = {}
	) {
		if (operation.name === 'delete') {
			const id = (requestParameters.id || '').toString();
			success(`Deleting Test with id ${id}!`);

			return Promise.resolve();
		}

		if (operation.name === 'edit' || operation.name === 'new') {
			const id =
				operation.name === 'edit' ? (requestParameters.id || '').toString() : faker.string.uuid();
			const test = data as Test;
			test.id = id;

			success(
				(operation.name === 'edit'
					? `Editing Test with id ${id}!`
					: `Creating new Test with id ${id}!`) +
					'\n' +
					'New content:\n' +
					JSON.stringify(test, undefined, 4)
			);

			return Promise.resolve();
		}

		return Promise.resolve();
	})
});
