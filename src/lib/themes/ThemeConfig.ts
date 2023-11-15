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
	};
	viewFields: {
		checkbox: ComponentType;
		default: ComponentType;
		tabs: ComponentType;
		url: ComponentType;
		label: ComponentType;
		column: ComponentType;
	};
	formFields: {
		checkbox: ComponentType;
		default: ComponentType;
		number: ComponentType;
		tabs: ComponentType;
		textarea: ComponentType;
		text: ComponentType;
		toggle: ComponentType;
		url: ComponentType;
		tabsForms: ComponentType;
		column: ComponentType;
	};
	menu: {
		sideMenu: ComponentType;
		topLeftMenu: ComponentType;
		topMenu: ComponentType;
		topRightMenu: ComponentType;
	};
};

export type CrudTheme = keyof ThemeConfig['crud'];
export type ViewFieldTheme = keyof ThemeConfig['viewFields'];
export type FormFieldTheme = keyof ThemeConfig['formFields'];
export type MenuTheme = keyof ThemeConfig['menu'];
