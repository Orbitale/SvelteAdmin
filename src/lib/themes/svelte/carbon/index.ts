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
import PasswordFormField from './FormFieldsComponents/PasswordField.svelte';
import TelFormField from './FormFieldsComponents/TelField.svelte';
import TimeFormField from './FormFieldsComponents/TimeField.svelte';
import DateTimeFormField from './FormFieldsComponents/DateTimeField.svelte';
import ColorFormField from './FormFieldsComponents/ColorField.svelte';
import IntegerFormField from './FormFieldsComponents/IntegerField.svelte';
import PercentFormField from './FormFieldsComponents/PercentField.svelte';
import MoneyFormField from './FormFieldsComponents/MoneyField.svelte';
import SlugFormField from './FormFieldsComponents/SlugField.svelte';
import HiddenFormField from './FormFieldsComponents/HiddenField.svelte';
import ChoiceFormField from './FormFieldsComponents/ChoiceField.svelte';
import MultiChoiceFormField from './FormFieldsComponents/MultiChoiceField.svelte';
import RadioFormField from './FormFieldsComponents/RadioField.svelte';
import CountryFormField from './FormFieldsComponents/CountryField.svelte';
import LanguageFormField from './FormFieldsComponents/LanguageField.svelte';
import LocaleFormField from './FormFieldsComponents/LocaleField.svelte';
import TimezoneFormField from './FormFieldsComponents/TimezoneField.svelte';
import MarkdownFormField from './FormFieldsComponents/MarkdownField.svelte';
import ImageFormField from './FormFieldsComponents/ImageField.svelte';
import FileFormField from './FormFieldsComponents/FileField.svelte';

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
import PasswordViewField from './ViewFieldsComponents/PasswordField.svelte';
import TelViewField from './ViewFieldsComponents/TelField.svelte';
import TimeViewField from './ViewFieldsComponents/TimeField.svelte';
import DateTimeViewField from './ViewFieldsComponents/DateTimeField.svelte';
import ColorViewField from './ViewFieldsComponents/ColorField.svelte';
import IntegerViewField from './ViewFieldsComponents/IntegerField.svelte';
import PercentViewField from './ViewFieldsComponents/PercentField.svelte';
import MoneyViewField from './ViewFieldsComponents/MoneyField.svelte';
import SlugViewField from './ViewFieldsComponents/SlugField.svelte';
import HiddenViewField from './ViewFieldsComponents/HiddenField.svelte';
import ChoiceViewField from './ViewFieldsComponents/ChoiceField.svelte';
import MultiChoiceViewField from './ViewFieldsComponents/MultiChoiceField.svelte';
import RadioViewField from './ViewFieldsComponents/RadioField.svelte';
import CountryViewField from './ViewFieldsComponents/CountryField.svelte';
import LanguageViewField from './ViewFieldsComponents/LanguageField.svelte';
import LocaleViewField from './ViewFieldsComponents/LocaleField.svelte';
import TimezoneViewField from './ViewFieldsComponents/TimezoneField.svelte';
import MarkdownViewField from './ViewFieldsComponents/MarkdownField.svelte';
import ImageViewField from './ViewFieldsComponents/ImageField.svelte';
import FileViewField from './ViewFieldsComponents/FileField.svelte';

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
		email: EmailViewField,
		password: PasswordViewField,
		tel: TelViewField,
		time: TimeViewField,
		date_time: DateTimeViewField,
		color: ColorViewField,
		integer: IntegerViewField,
		percent: PercentViewField,
		money: MoneyViewField,
		slug: SlugViewField,
		hidden: HiddenViewField,
		choice: ChoiceViewField,
		multi_choice: MultiChoiceViewField,
		radio: RadioViewField,
		country: CountryViewField,
		language: LanguageViewField,
		locale: LocaleViewField,
		timezone: TimezoneViewField,
		markdown: MarkdownViewField,
		image: ImageViewField,
		file: FileViewField
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
		email: EmailFormField,
		password: PasswordFormField,
		tel: TelFormField,
		time: TimeFormField,
		date_time: DateTimeFormField,
		color: ColorFormField,
		integer: IntegerFormField,
		percent: PercentFormField,
		money: MoneyFormField,
		slug: SlugFormField,
		hidden: HiddenFormField,
		choice: ChoiceFormField,
		multi_choice: MultiChoiceFormField,
		radio: RadioFormField,
		country: CountryFormField,
		language: LanguageFormField,
		locale: LocaleFormField,
		timezone: TimezoneFormField,
		markdown: MarkdownFormField,
		image: ImageFormField,
		file: FileFormField
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

export { default as ThemeChangerAction } from './lib/ThemeChangeMenu';
