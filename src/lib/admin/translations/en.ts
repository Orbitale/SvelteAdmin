import type { Dictionary } from '../admin_i18n.ts';

const dictionary: Dictionary = {
	'crud.header.edit': 'Edit',
	'crud.header.new': 'New',
	'crud.form.submit': 'Submit',
	'data_table.items.unsupported_action': 'Action type "{action}" not supported.',
	'error.crud.could_not_find_crud_name': 'Could not find a CRUD config with name "{crud}".',
	'error.crud.no_crud_specified': 'No CRUD name was specified when displaying the Dashboard.',
	'error.crud.could_not_find_action_name':
		'Could not find a CRUD action named "{action}" for CRUD definition named "{crud}".',
	'error.crud.no_action_specified':
		'No CRUD action was specified when displaying the "{crud}" CRUD.',
	'error.crud.list.no_elements': 'No elements found.'
};

export default dictionary;
