import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';

import { DashboardDefinition } from '$lib/admin/Dashboard/definition.js';
import { UrlAction } from '$lib/admin/actions.js';

import fr from './translations/fr.js';
import { bookCrud } from './BookCrud.js';

export const dashboard = new DashboardDefinition({
	adminConfig: {
		head: {
			brandName: 'Svelte Admin',
			appName: 'Demo'
		}
	},
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book)
	],
	localeDictionaries: {
		fr: fr
	},
	cruds: [bookCrud]
});
