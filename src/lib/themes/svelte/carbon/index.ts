import CrudDelete from './Crud/CrudDelete.svelte';
import CrudEdit from './Crud/CrudEdit.svelte';
import CrudForm from './Crud/CrudForm.svelte';
import CrudFormField from './Crud/CrudFormField.svelte';
import CrudList from './Crud/CrudList.svelte';
import CrudNew from './Crud/CrudNew.svelte';
import CrudView from './Crud/CrudView.svelte';
import CrudViewField from './Crud/CrudViewField.svelte';

import Dashboard from './Dashboard/Dashboard.svelte';

import DataTable from './DataTable/DataTable.svelte';

import CheckboxFormField from './FormFieldsComponents/CheckboxField.svelte';
import ColumnsFormField from './FormFieldsComponents/ColumnsField.svelte';
import CrudEntityFormField from './FormFieldsComponents/CrudEntityField.svelte';
import DateFormField from './FormFieldsComponents/DateField.svelte';
import DefaultFormField from './FormFieldsComponents/DefaultField.svelte';
import NumberFormField from './FormFieldsComponents/NumberField.svelte';
import KeyValueObjectFormField from './FormFieldsComponents/KeyValueObjectField.svelte';
import TabsFormField from './FormFieldsComponents/TabsField.svelte';
import TextareaFormField from './FormFieldsComponents/TextareaField.svelte';
import TextFormField from './FormFieldsComponents/TextField.svelte';
import ToggleFormField from './FormFieldsComponents/ToggleField.svelte';
import UrlFormField from './FormFieldsComponents/UrlField.svelte';
import ArrayFormField from './FormFieldsComponents/ArrayField.svelte';
import EmailFormField from './FormFieldsComponents/EmailField.svelte';

import AdminLayout from './Layout/AdminLayout.svelte';

import SideMenu from './Menu/SideMenu.svelte';
import TopLeftMenu from './Menu/TopLeftMenu.svelte';
import TopMenu from './Menu/TopMenu.svelte';
import TopRightMenu from './Menu/TopRightMenu.svelte';

import CheckboxViewField from './ViewFieldsComponents/CheckboxField.svelte';
import ColumnsViewField from './ViewFieldsComponents/ColumnsField.svelte';
import CrudEntityViewField from './ViewFieldsComponents/CrudEntityField.svelte';
import DateViewField from './ViewFieldsComponents/DateField.svelte';
import DefaultViewField from './ViewFieldsComponents/DefaultField.svelte';
import NumberViewField from './ViewFieldsComponents/NumberField.svelte';
import KeyValueObjectViewField from './ViewFieldsComponents/KeyValueObjectField.svelte';
import TabsViewField from './ViewFieldsComponents/TabsField.svelte';
import TextareaViewField from './ViewFieldsComponents/DefaultField.svelte';
import TextViewField from './ViewFieldsComponents/DefaultField.svelte';
import ToggleViewField from './ViewFieldsComponents/ToggleField.svelte';
import UrlViewField from './ViewFieldsComponents/UrlField.svelte';
import ArrayViewField from './ViewFieldsComponents/ArrayField.svelte';
import EmailViewField from './ViewFieldsComponents/EmailField.svelte';

import ViewLabel from './ViewFieldsComponents/ViewLabel.svelte';

import BooleanFilter from './FilterComponents/BooleanFilter.svelte';
import DateRangeFilter from './FilterComponents/DateRangeFilter.svelte';
import NumericFilter from './FilterComponents/NumericFilter.svelte';
import TextFilter from './FilterComponents/TextFilter.svelte';

import type { ThemeConfig } from '$lib';

const theme: ThemeConfig = {
	adminLayout: AdminLayout,
	dashboard: Dashboard,
	dataTable: DataTable,
	viewField: CrudViewField,
	formField: CrudFormField,
	form: CrudForm,
	crudActions: {
		delete: CrudDelete,
		edit: CrudEdit,
		list: CrudList,
		new: CrudNew,
		view: CrudView
	},
	viewFields: {
		checkbox: CheckboxViewField,
		column: ColumnsViewField,
		crud_entity: CrudEntityViewField,
		date: DateViewField,
		default: DefaultViewField,
		label: ViewLabel,
		number: NumberViewField,
		key_value_object: KeyValueObjectViewField,
		tabs: TabsViewField,
		text: TextViewField,
		textarea: TextareaViewField,
		toggle: ToggleViewField,
		url: UrlViewField,
		array: ArrayViewField,
		email: EmailViewField
	},
	formFields: {
		checkbox: CheckboxFormField,
		column: ColumnsFormField,
		crud_entity: CrudEntityFormField,
		date: DateFormField,
		default: DefaultFormField,
		number: NumberFormField,
		key_value_object: KeyValueObjectFormField,
		tabs: TabsFormField,
		text: TextFormField,
		textarea: TextareaFormField,
		toggle: ToggleFormField,
		url: UrlFormField,
		array: ArrayFormField,
		email: EmailFormField
	},
	filters: {
		boolean: BooleanFilter,
		date_range: DateRangeFilter,
		numeric: NumericFilter,
		text: TextFilter
	},
	menu: {
		sideMenu: SideMenu,
		topLeftMenu: TopLeftMenu,
		topMenu: TopMenu,
		topRightMenu: TopRightMenu
	}
};

export default theme;
