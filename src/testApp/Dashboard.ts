import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Document from 'carbon-icons-svelte/lib/Document.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';
import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
import Switcher from 'carbon-icons-svelte/lib/Switcher.svelte';
import User from 'carbon-icons-svelte/lib/User.svelte';

import { DashboardDefinition, CallbackAction, UrlAction, Submenu } from '$lib';
import { carbon } from '$lib/themes/svelte';

import fr from './translations/fr';
import { bookCrud } from './BookCrud';
import { authorCrud } from './AuthorCrud';
import { testCrud } from './TestCrud';
import { ThemeChangerAction } from '$lib/themes/svelte/carbon';

let newLinkIndex = 1;

const dynamicallyCustomizable: Submenu = new Submenu('Dynamic menu', Switcher, [
	new CallbackAction('Add a new link to the menu', null, () => {
		dashboard.stores.topRightMenu.update((links) => {
			dynamicallyCustomizable.links.push(new UrlAction('Custom link' + newLinkIndex++, '/'));
			return [...links];
		});
	})
]);

export const dashboard = new DashboardDefinition({
	theme: carbon,
	adminConfig: {
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		rootUrl: '/admin',
		head: {
			brandName: 'Svelte Admin',
			appName: 'Demo'
		}
	},
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book),
		new UrlAction('Authors', '/admin/authors/list', User),
		new CallbackAction('Callback link', null, () => {
			alert('Hey, this link is called with Javascript!');
		}),
		new Submenu('Submenu', null, [
			new UrlAction('Submenu 1', '#', Book),
			new UrlAction('Submenu 2', '#', Book)
		])
	],
	topLeftMenu: [
		new ThemeChangerAction(),
		new UrlAction('API Docs', '/apidocs', Document, { htmlAttributes: { rel: 'external' } })
	],
	topRightMenu: [
		new UrlAction('Single menu link', '/'),
		new CallbackAction('Single menu callback', null, () => {
			alert('Hey, this link is called with Javascript too!');
		}),

		new Submenu('Specific submenu', Menu, [
			new UrlAction('Submenu item 1', '/', Book),
			new UrlAction('Submenu item 2', '/', Book)
		]),
		dynamicallyCustomizable
	],
	localeDictionaries: {
		fr: fr
	},
	cruds: [bookCrud, authorCrud, testCrud]
});
