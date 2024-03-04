import type { Dictionary } from '$lib/i18n';

const dictionary: Dictionary = {
	'crud.header.edit': 'Modifier',
	'crud.header.new': 'Créer',
	'crud.form.submit': 'Envoyer',
	'crud.list.label': 'Liste des {name}',
	'crud.delete.label': 'Supprimer {name}',
	'crud.new.label': 'Créer {name}',
	'crud.edit.label': 'Modifier {name}',
	'crud.view.label': 'Voir {name}',
	'crud.delete.are_you_sure': 'Voulez-vous vraiment supprimer le {name} à l\'identifiant "{id}" ?',
	'crud.delete.cancel': 'Non, annuler',
	'crud.delete.yes_delete': 'Oui, supprimer',
	'data_table.items.unsupported_action': 'Type d\'action "{operation}" non prise en charge.',
	'error.crud.form.entity_field_list_fetch_error':
		"Une erreur est survenue lors de la récupération d'une liste d'élements:\n{message}",
	'error.crud.form.entity_field_view_fetch_error':
		"Une erreur est survenue lors de la récupération d'un élement:\n{message}",
	'error.crud.form.object.duplicate_key': '⚠ Clé déjà présente !',
	'error.crud.could_not_find_crud_name': 'Configuration de CRUD "{crud}" introuvable.',
	'error.crud.no_crud_specified':
		"Aucun nom de CRUD n'a été spécifié pour afficher le tableau de bord.",
	'error.crud.could_not_find_operation_name':
		'Opération "{operation}" introuvable pour la configuration de CRUD "{crud}".',
	'error.crud.could_not_find_component':
		'Aucun template trouvé pour l\'opération "{operation}" et le CRUD "{crud}".',
	'error.crud.no_operation_specified':
		'Aucune opération n\'a été spécifié pour afficher le CRUD "{crud}".',
	'error.crud.list.no_elements': 'Aucun élément trouvé.',
	'error.crud.list.load_error': 'Une erreur est survenue au chargement des données.',
	'error.crud.entity.not_found': 'Aucun élément trouvé avec cet identifiant.',
	'datatable.filters.menu_title': 'Filtres',
	'datatable.filters.submit_filters': 'Filtrer les résultats',
	'datatable.filters.reset_filters': 'Réinitialiser les filtres',
	'filters.date.from': 'À partir de cette date',
	'filters.date.to': "Jusqu'à cette date"
};

export default dictionary;
