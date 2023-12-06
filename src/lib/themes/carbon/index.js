import CrudDelete from './Crud/CrudDelete.svelte';
import CrudEdit from './Crud/CrudEdit.svelte';
import CrudFormField from './Crud/CrudFormField.svelte';
import CrudForm from './Crud/CrudForm.svelte';
import CrudList from './Crud/CrudList.svelte';
import CrudNew from './Crud/CrudNew.svelte';
import CrudViewField from './Crud/CrudViewField.svelte';
import CrudView from './Crud/CrudView.svelte';

import Dashboard from './Dashboard/Dashboard.svelte';

import DataTable from './DataTable/DataTable.svelte';

import CheckboxFormField from './FormFieldsComponents/CheckboxField.svelte';
import DefaultFormField from './FormFieldsComponents/DefaultField.svelte';
import NumberFormField from './FormFieldsComponents/NumberField.svelte';
import TabsFormField from './FormFieldsComponents/TabsField.svelte';
import TextareaFormField from './FormFieldsComponents/TextareaField.svelte';
import TextFormField from './FormFieldsComponents/TextField.svelte';
import ToggleFormField from './FormFieldsComponents/ToggleField.svelte';
import UrlFormField from './FormFieldsComponents/UrlField.svelte';
import ColumnsFormField from './FormFieldsComponents/ColumnsField.svelte';

import AdminLayout from './Layout/AdminLayout.svelte';

import SideMenu from './Menu/SideMenu.svelte';
import TopLeftMenu from './Menu/TopLeftMenu.svelte';
import TopMenu from './Menu/TopMenu.svelte';
import TopRightMenu from './Menu/TopRightMenu.svelte';

import CheckboxViewField from './ViewFieldsComponents/CheckboxField.svelte';
import DefaultViewField from './ViewFieldsComponents/DefaultField.svelte';
import TabsViewField from './ViewFieldsComponents/TabsField.svelte';
import UrlViewField from './ViewFieldsComponents/UrlField.svelte';
import ViewLabel from './ViewFieldsComponents/ViewLabel.svelte';
import ColumnsViewField from './ViewFieldsComponents/ColumnsField.svelte';

/**
 * @type import("../ThemeConfig").ThemeConfig
 */
const theme = {
	dashboard: Dashboard,
	dataTable: DataTable,
	adminLayout: AdminLayout,
	viewField: CrudViewField,
	formField: CrudFormField,
	form: CrudForm,
	crudActions: {
		view: CrudView,
		new: CrudNew,
		list: CrudList,
		edit: CrudEdit,
		delete: CrudDelete
	},
	viewFields: {
		checkbox: CheckboxViewField,
		default: DefaultViewField,
		tabs: TabsViewField,
		url: UrlViewField,
		label: ViewLabel,
		column: ColumnsViewField
	},
	formFields: {
		checkbox: CheckboxFormField,
		default: DefaultFormField,
		number: NumberFormField,
		tabs: TabsFormField,
		textarea: TextareaFormField,
		text: TextFormField,
		toggle: ToggleFormField,
		url: UrlFormField,
		column: ColumnsFormField
	},
	menu: {
		sideMenu: SideMenu,
		topLeftMenu: TopLeftMenu,
		topMenu: TopMenu,
		topRightMenu: TopRightMenu
	}
};

export default theme;