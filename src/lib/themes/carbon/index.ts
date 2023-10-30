import type { ThemeConfig } from '../ThemeConfig';

import CrudDelete from '$lib/themes/carbon/Crud/CrudDelete.svelte';
import CrudEdit from '$lib/themes/carbon/Crud/CrudEdit.svelte';
import CrudFormField from '$lib/themes/carbon/Crud/CrudFormField.svelte';
import CrudForm from '$lib/themes/carbon/Crud/CrudForm.svelte';
import CrudList from '$lib/themes/carbon/Crud/CrudList.svelte';
import CrudNew from '$lib/themes/carbon/Crud/CrudNew.svelte';
import CrudViewField from '$lib/themes/carbon/Crud/CrudViewField.svelte';
import CrudView from '$lib/themes/carbon/Crud/CrudView.svelte';

import Dashboard from '$lib/themes/carbon/Dashboard/Dashboard.svelte';

import DataTable from '$lib/themes/carbon/DataTable/DataTable.svelte';

import CheckboxFormField from '$lib/themes/carbon/FormFieldsComponents/CheckboxField.svelte';
import DefaultFormField from '$lib/themes/carbon/FormFieldsComponents/DefaultField.svelte';
import NumberFormField from '$lib/themes/carbon/FormFieldsComponents/NumberField.svelte';
import TabsFormField from '$lib/themes/carbon/FormFieldsComponents/TabsField.svelte';
import TabsForms from '$lib/themes/carbon/FormFieldsComponents/TabsForms.svelte';
import TextareaFormField from '$lib/themes/carbon/FormFieldsComponents/TextareaField.svelte';
import TextFormField from '$lib/themes/carbon/FormFieldsComponents/TextField.svelte';
import ToggleFormField from '$lib/themes/carbon/FormFieldsComponents/ToggleField.svelte';
import UrlFormField from '$lib/themes/carbon/FormFieldsComponents/UrlField.svelte';

import AdminLayout from '$lib/themes/carbon/Layout/AdminLayout.svelte';

import SideMenu from '$lib/themes/carbon/Menu/SideMenu.svelte';
import TopLeftMenu from '$lib/themes/carbon/Menu/TopLeftMenu.svelte';
import TopMenu from '$lib/themes/carbon/Menu/TopMenu.svelte';
import TopRightMenu from '$lib/themes/carbon/Menu/TopRightMenu.svelte';

import CheckboxViewField from '$lib/themes/carbon/ViewFieldsComponents/CheckboxField.svelte';
import DefaultViewField from '$lib/themes/carbon/ViewFieldsComponents/DefaultField.svelte';
import TabsView from '$lib/themes/carbon/ViewFieldsComponents/TabsView.svelte';
import UrlViewField from '$lib/themes/carbon/ViewFieldsComponents/UrlField.svelte';
import ViewLabel from '$lib/themes/carbon/ViewFieldsComponents/ViewLabel.svelte';

const theme: ThemeConfig = {
	dashboard: Dashboard,
	dataTable: DataTable,
	adminLayout: AdminLayout,
	crud: {
		view: CrudView,
		new: CrudNew,
		list: CrudList,
		edit: CrudEdit,
		delete: CrudDelete,
		form: CrudForm,
		viewField: CrudViewField,
		formField: CrudFormField,
		tabsForms: TabsForms
	},
	viewFields: {
		checkboxViewField: CheckboxViewField,
		defaultViewField: DefaultViewField,
		tabsView: TabsView,
		urlViewField: UrlViewField,
		viewLabel: ViewLabel
	},
	formFields: {
		checkbox: CheckboxFormField,
		default: DefaultFormField,
		number: NumberFormField,
		tabsField: TabsFormField,
		textarea: TextareaFormField,
		text: TextFormField,
		toggle: ToggleFormField,
		url: UrlFormField
	},
	menu: {
		sideMenu: SideMenu,
		topLeftMenu: TopLeftMenu,
		topMenu: TopMenu,
		topRightMenu: TopRightMenu
	}
};

export default theme;
