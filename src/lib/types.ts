import type { Component, ComponentProps } from 'svelte';

/** */
export type SubmitButtonType =
	'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger-tertiary' | 'danger-ghost';

/** */
export type ThemeConfig = {
	dashboard: Component;
	dataTable: Component;
	adminLayout: Component;
	viewField: Component;
	formField: Component;
	form: Component;
	crudActions: {
		view: Component;
		new: Component;
		list: Component;
		edit: Component;
		delete: Component;
		[key: string]: Component;
	};
	viewFields: {
		checkbox: Component;
		column: Component;
		crud_entity: Component;
		date: Component;
		default: Component;
		label: Component;
		number: Component;
		key_value_object: Component;
		tabs: Component;
		textarea: Component;
		text: Component;
		toggle: Component;
		url: Component;
		array: Component;
		email: Component;
		[key: string]: Component;
	};
	formFields: {
		checkbox: Component;
		column: Component;
		crud_entity: Component;
		date: Component;
		default: Component;
		number: Component;
		key_value_object: Component;
		tabs: Component;
		textarea: Component;
		text: Component;
		toggle: Component;
		url: Component;
		array: Component;
		email: Component;
		[key: string]: Component;
	};
	filters: {
		boolean: Component;
		text: Component;
		date_range: Component;
		numeric: Component;
		[key: string]: Component;
	};
	menu: {
		sideMenu: Component;
		topLeftMenu: Component;
		topMenu: Component;
		topRightMenu: Component;
	};
};

/** */ export type CrudTheme = keyof ThemeConfig['crudActions'];

/** */ export type ViewFieldTheme = keyof ThemeConfig['viewFields'];

/** */ export type FormFieldTheme = keyof ThemeConfig['formFields'];

/** */ export type FilterTheme = keyof ThemeConfig['filters'];

/** */ export type MenuTheme = keyof ThemeConfig['menu'];
