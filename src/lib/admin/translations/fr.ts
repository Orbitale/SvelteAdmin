import type { Dictionary } from '../admin_i18n';

const dictionary: Dictionary = {
	'crud.header.edit': 'Modifier',
	'crud.header.new': 'Créer',
	'crud.form.submit': 'Envoyer',
	'crud.list.label': 'Liste "{name}"',
	'crud.delete.are_you_sure': 'Voulez-vous vraiment supprimer le {name} à l\'identifiant "{id}" ?',
	'crud.delete.cancel': 'Non, annuler',
	'crud.delete.yes_delete': 'Oui, supprimer',
	'data_table.items.unsupported_action': 'Type d\'action "{action}" non prise en charge.',
	'error.crud.could_not_find_crud_name': 'Configuration de CRUD "{crud}" introuvable.',
	'error.crud.no_crud_specified':
		"Aucun nom de CRUD n'a été spécifié pour afficher le tableau de bord.",
	'error.crud.could_not_find_action_name':
		'Action "{action}" introuvable pour la configuration de CRUD "{crud}".',
	'error.crud.no_action_specified':
		'Aucune action n\'a été spécifié pour afficher le CRUD "{crud}".',
	'error.crud.list.no_elements': 'Aucun élément trouvé.',
	'error.crud.entity.not_found': 'Aucun élément trouvé avec cet identifiant.'
};

export default dictionary;
