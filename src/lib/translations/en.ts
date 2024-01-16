import type { Dictionary } from '$lib/admin_i18n';

const dictionary: Dictionary = {
	'crud.header.edit': 'Edit',
	'crud.header.new': 'New',
	'crud.form.submit': 'Submit',
	'crud.list.label': 'List of {name}',
	'crud.delete.label': 'Delete {name}',
	'crud.new.label': 'Create new {name}',
	'crud.edit.label': 'Update {name}',
	'crud.view.label': 'View {name}',
	'crud.delete.are_you_sure': 'Are you sure you want to delete {name} with identifier "{id}"?',
	'crud.delete.cancel': 'No, cancel',
	'crud.delete.yes_delete': 'Yes, delete',
	'data_table.items.unsupported_action': 'Action type "{action}" not supported.',
	'error.crud.could_not_find_crud_name': 'Could not find a CRUD config with name "{crud}".',
	'error.crud.no_crud_specified': 'No CRUD name was specified when displaying the Dashboard.',
	'error.crud.could_not_find_operation_name':
		'Could not find a CRUD operation named "{operation}" for CRUD definition named "{crud}".',
	'error.crud.no_operation_specified':
		'No CRUD operation was specified when displaying the "{crud}" CRUD.',
	'error.crud.list.no_elements': 'No elements found.',
	'error.crud.entity.not_found': 'No element found with this identifier.',
	'datatable.filters.menu_title': 'Filters',
	'datatable.filters.submit_filters': 'Filter results',
	'datatable.filters.reset_filters': 'Reset filters',
	'filters.date.from': 'From this date',
	'filters.date.to': 'Up to this date'
};

export default dictionary;
