// src/lib/AuthorCrud.ts
import {
	CallbackAction,
	CallbackStateProcessor,
	CallbackStateProvider,
	CrudDefinition,
	DateField,
	DateRangeFilter,
	Delete,
	Edit,
	List,
	New,
	PaginatedResults,
	TextareaField,
	TextField,
	TextFilter,
	type RequestParameters,
	UrlAction,
	View
} from '$lib';

import { faker } from '@faker-js/faker';

import Pen from 'carbon-icons-svelte/lib/Pen.svelte';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte';
import { type Author, getStorage } from './internal/authorsInternal';

const fields = [
	new TextField('first_name', 'First name'),
	new TextField('last_name', 'Last name'),
	new TextareaField('Bio', 'Biography')
];

const IdField = new TextField('id', 'ID');

const itemsPerPage = 10;

function randomWait(maxMilliseconds: number) {
	return new Promise((resolve: (...args: unknown[]) => unknown) =>
		setTimeout(resolve, Math.random() * maxMilliseconds)
	);
}

export const authorCrud = new CrudDefinition<Author>({
	name: 'authors',
	label: { singular: 'Author', plural: 'Authors' },
	minStateLoadingTimeMs: 400,

	operations: [
		new List(
			[IdField, ...fields],
			[
				new UrlAction('View', '/admin/authors/view', ViewIcon),
				new UrlAction('Edit', '/admin/authors/edit', Pen),
				new UrlAction('Delete', '/admin/authors/delete', TrashCan)
			],
			{
				globalActions: [
					new CallbackAction(
						'Reset memory data',
						TrashCan,
						() => {
							window.localStorage.removeItem('authors');
							window.location.reload();
						},
						{ buttonKind: 'ghost' }
					),
					new UrlAction('New', '/admin/authors/new', Pen)
				],
				pagination: {
					enabled: true,
					itemsPerPage: itemsPerPage
				},
				filters: [
					new TextFilter('first_name', 'First name contains'),
					new TextFilter('last_name', 'Last name contains'),
					new TextFilter('bio', 'Biography contains')
				]
			}
		),
		new View([IdField, ...fields]),
		new New(fields),
		new Edit(fields),
		new Delete(fields, new UrlAction('List', '/admin/authors/list'))
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
			const entity = data as Author;
			entity.id = id;

			if (operation.name === 'new') {
				getStorage().add(entity);
			} else {
				getStorage().update(entity);
			}

			return Promise.resolve();
		}

		console.error(
			'StateProcessor error: Unsupported Authors Crud action "' + operation.name + '".'
		);

		return Promise.resolve();
	}),

	stateProvider: new CallbackStateProvider<Author>(async function (
		operation,
		requestParameters: RequestParameters = {}
	) {
		console.info('Authors provider called', { operation: operation.name, requestParameters });

		if (operation.name === 'list') {
			const page = parseInt((requestParameters.page || '1').toString());
			if (isNaN(page)) {
				throw new Error(`Invalid "page" value: expected a number, got "${page}".`);
			}

			let entities = getStorage().all();
			const filters = requestParameters.filters;
			if (filters) {
				entities = entities.filter((entity) => {
					if (
						filters.first_name &&
						!entity.first_name.match(new RegExp(filters.first_name.toString(), 'gi'))
					) {
						return false;
					}
					if (
						filters.last_name &&
						!entity.last_name.match(new RegExp(filters.last_name.toString(), 'gi'))
					) {
						return false;
					}
					if (filters.bio && !entity.bio.match(new RegExp(filters.bio.toString(), 'gi'))) {
						return false;
					}

					return true;
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

		console.error('StateProvider error: Unsupported Authors Crud action "' + operation.name + '".');

		return Promise.resolve(null);
	})
});
