import type { ComponentType } from 'svelte';

export type ThemeConfig = {
	dashboard: ComponentType;
	dataTable: ComponentType;
	adminLayout: ComponentType;
	crud: {
		view: ComponentType;
		new: ComponentType;
		list: ComponentType;
		edit: ComponentType;
		delete: ComponentType;
		form: ComponentType;
		viewField: ComponentType;
		formField: ComponentType;
		tabsForms: ComponentType;
	};
	viewFields: {
		checkboxViewField: ComponentType;
		defaultViewField: ComponentType;
		tabsView: ComponentType;
		urlViewField: ComponentType;
		viewLabel: ComponentType;
	};
	formFields: {
		checkbox: ComponentType;
		default: ComponentType;
		number: ComponentType;
		tabsField: ComponentType;
		textarea: ComponentType;
		text: ComponentType;
		toggle: ComponentType;
		url: ComponentType;
	};
	menu: {
		sideMenu: ComponentType;
		topLeftMenu: ComponentType;
		topMenu: ComponentType;
		topRightMenu: ComponentType;
	};
};
