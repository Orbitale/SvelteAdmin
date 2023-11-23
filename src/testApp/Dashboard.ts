import Book from 'carbon-icons-svelte/lib/Book.svelte';
import Home from 'carbon-icons-svelte/lib/Home.svelte';

import { DashboardDefinition } from '$lib/Dashboard/definition';
import theme from '$lib/themes/material3';
import { CallbackAction, UrlAction } from '$lib/actions';

import fr from './translations/fr';
import { bookCrud } from './BookCrud';
import { Divider, Submenu } from '$lib';

export const dashboard = new DashboardDefinition({
	adminConfig: {
		theme: theme,
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		rootUrl: '/admin',
		head: {
			brandName: 'Svelte Admin',
			appName: 'Demo'
		}
	},
	topLeftMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book),
		new Divider(),
		new CallbackAction('Callback link', null, (item?: object | undefined) => {
			alert('Hey, this link is called with Javascript!');
		}),
		new Submenu('Submenu', null, [
			new UrlAction('Submenu 1', '#', Book),
			new UrlAction('Submenu 2', '#', Book)
		])
	],
	topRightMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book),
		new Divider(),
		new CallbackAction('Callback link', null, (item?: object | undefined) => {
			alert('Hey, this link is called with Javascript!');
		}),
		new Submenu('Submenu', null, [
			new UrlAction('Submenu 1', '#', Book),
			new UrlAction('Submenu 2', '#', Book)
		])
	],
	sideMenu: [
		new UrlAction('Homepage', '/', Home),
		new UrlAction('Books', '/admin/books/list', Book),
		new Divider(),
		new CallbackAction('Callback link', null, (item?: object | undefined) => {
			alert('Hey, this link is called with Javascript!');
		}),
		new Submenu('Submenu', null, [
			new UrlAction('Submenu 1', '#', Book),
			new UrlAction('Submenu 2', '#', Book)
		])
	],
	localeDictionaries: {
		fr: fr
	},
	cruds: [bookCrud]
});
