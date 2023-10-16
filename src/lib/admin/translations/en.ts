import type { Dictionary } from '$lib/admin/admin_i18n.ts';

const dictionary: Dictionary = {
	'crud.header.edit': 'Edit',
	'crud.header.new': 'New',
	'crud.form.submit': 'Submit',
	'crud.list.label': 'List "{name}"',
	'crud.delete.are_you_sure': 'Are you sure you want to delete {name} with identifier "{id}"?',
	'crud.delete.cancel': 'No, cancel',
	'crud.delete.yes_delete': 'Yes, delete',
	'data_table.items.unsupported_action': 'Action type "{action}" not supported.',
	'error.crud.could_not_find_crud_name': 'Could not find a CRUD config with name "{crud}".',
	'error.crud.no_crud_specified': 'No CRUD name was specified when displaying the Dashboard.',
	'error.crud.could_not_find_action_name':
		'Could not find a CRUD action named "{action}" for CRUD definition named "{crud}".',
	'error.crud.no_action_specified':
		'No CRUD action was specified when displaying the "{crud}" CRUD.',
	'error.crud.list.no_elements': 'No elements found.',
	'error.crud.entity.not_found': 'No element found with this identifier.'
};

export default dictionary;
