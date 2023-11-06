import type { MenuLink } from '$lib/Menu/MenuLinks';
import type { Dictionaries } from '$lib/admin_i18n';
import type { CrudDefinition } from '$lib/Crud/definition';
import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';
import theme from '$lib/stores/theme';

export type DashboardDefinitionOptions<T> = {
	adminConfig: Partial<AdminConfig>;
	cruds: Array<CrudDefinition<T>>;
	sideMenu?: Array<MenuLink>;
	topLeftMenu?: Array<MenuLink>;
	topRightMenu?: Array<MenuLink>;
	localeDictionaries?: Dictionaries;
};

export class DashboardDefinition<T> {
	public readonly adminConfig: AdminConfig;
	public readonly cruds: Array<CrudDefinition<T>>;
	public readonly sideMenu: Array<MenuLink> = [];
	public readonly topLeftMenu: Array<MenuLink> = [];
	public readonly topRightMenu: Array<MenuLink> = [];
	public readonly localeDictionaries: Dictionaries = {};

	public readonly options = {};

	constructor(options: DashboardDefinitionOptions<T>) {
		this.adminConfig = { ...emptyAdminConfig(), ...options.adminConfig };
		this.cruds = options.cruds;
		this.sideMenu = options.sideMenu || [];
		this.topLeftMenu = options.topLeftMenu || [];
		this.topRightMenu = options.topRightMenu || [];
		this.localeDictionaries = options.localeDictionaries || {};
		theme.set(this.adminConfig.theme);
	}
}
