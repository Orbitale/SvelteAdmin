import type { ComponentType } from 'svelte';

export type ThemeConfig = {
	dashboard: ComponentType;
	dataTable: ComponentType;
	adminLayout: ComponentType;
	viewField: ComponentType;
	formField: ComponentType;
	form: ComponentType;
	crudActions: {
		view: ComponentType;
		new: ComponentType;
		list: ComponentType;
		edit: ComponentType;
		delete: ComponentType;
		[key: string]: ComponentType;
	};
	viewFields: {
		checkbox: ComponentType;
		default: ComponentType;
		tabs: ComponentType;
		url: ComponentType;
		label: ComponentType;
		column: ComponentType;
		[key: string]: ComponentType;
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
		column: ComponentType;
		[key: string]: ComponentType;
	};
	filters: {
		boolean: ComponentType;
		text: ComponentType;
		date: ComponentType;
		numeric: ComponentType;
		[key: string]: ComponentType;
	};
	menu: {
		sideMenu: ComponentType;
		topLeftMenu: ComponentType;
		topMenu: ComponentType;
		topRightMenu: ComponentType;
	};
};

export type CrudTheme = keyof ThemeConfig['crudActions'];
export type ViewFieldTheme = keyof ThemeConfig['viewFields'];
export type FormFieldTheme = keyof ThemeConfig['formFields'];
export type FilterTheme = keyof ThemeConfig['filters'];
export type MenuTheme = keyof ThemeConfig['menu'];
