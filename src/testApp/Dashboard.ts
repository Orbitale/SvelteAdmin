import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';

import { DashboardDefinition } from '$lib/Dashboard/definition';
import { UrlAction } from '$lib/actions';

import fr from './translations/fr';
import { bookCrud } from './BookCrud';

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
