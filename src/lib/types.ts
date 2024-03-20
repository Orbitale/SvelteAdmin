import type { ComponentType } from 'svelte';

/** */
export type SubmitButtonType =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'ghost'
	| 'danger'
	| 'danger-tertiary'
	| 'danger-ghost';

/** */
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
		column: ComponentType;
		crud_entity: ComponentType;
		date: ComponentType;
		default: ComponentType;
		label: ComponentType;
		number: ComponentType;
		key_value_object: ComponentType;
		tabs: ComponentType;
		textarea: ComponentType;
		text: ComponentType;
		toggle: ComponentType;
		url: ComponentType;
		array: ComponentType;
		[key: string]: ComponentType;
	};
	formFields: {
		checkbox: ComponentType;
		column: ComponentType;
		crud_entity: ComponentType;
		date: ComponentType;
		default: ComponentType;
		number: ComponentType;
		key_value_object: ComponentType;
		tabs: ComponentType;
		textarea: ComponentType;
		text: ComponentType;
		toggle: ComponentType;
		url: ComponentType;
		array: ComponentType;
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

/** */ export type CrudTheme = keyof ThemeConfig['crudActions'];

/** */ export type ViewFieldTheme = keyof ThemeConfig['viewFields'];

/** */ export type FormFieldTheme = keyof ThemeConfig['formFields'];

/** */ export type FilterTheme = keyof ThemeConfig['filters'];

/** */ export type MenuTheme = keyof ThemeConfig['menu'];
