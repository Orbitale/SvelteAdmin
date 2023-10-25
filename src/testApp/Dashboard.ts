import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';

import { DashboardDefinition } from '$lib/Dashboard/definition';
import {CallbackAction, UrlAction} from '$lib/actions';

import fr from './translations/fr';
import { bookCrud } from './BookCrud';
import {Submenu} from "$lib";

export const dashboard = new DashboardDefinition({
	adminConfig: {
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		head: {
			brandName: 'Svelte Admin',
			appName: 'Demo'
		}
	},
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new Submenu('Entities', null, [
			new UrlAction('Books (Svelte icon)', '/admin/books/list', Book),
			new UrlAction('Books (String emoji icon)', '/admin/books/list', '📚'),
		]),
		new CallbackAction('Callback link', null, (item?: object|undefined) => {
			alert('Hey, this link is called with Javascript!');
		})
	],
	localeDictionaries: {
		fr: fr
	},
	cruds: [bookCrud]
});
