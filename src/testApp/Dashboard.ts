import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';

import { DashboardDefinition } from '$lib/admin/Dashboard/definition.ts';
import { UrlAction } from '$lib/admin/actions.ts';

import fr from './translations/fr.ts';
import { bookCrud } from './BookCrud.ts';

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
	localeDictionaries: { fr },
	cruds: [bookCrud]
});
