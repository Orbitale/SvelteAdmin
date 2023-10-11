// src/lib/Dashboard.ts
import { DashboardDefinition } from '$lib/admin/Dashboard/definition.ts';
import { bookCrud } from './BookCrud.ts';
import { UrlAction } from '$lib/admin/actions.ts';
import { Book, Home } from 'carbon-icons-svelte';
import fr from './translations/fr.ts';

export const dashboard = new DashboardDefinition({
	admin: {
		head: {
			brandName: 'Brand name',
			appName: 'App name'
		}
	},
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book)
	],
	topLeftMenu: [],
	topRightMenu: [],
	localeDictionaries: { fr },
	locales: ['fr', 'en'],
	cruds: [bookCrud]
});
