import type { MenuLink } from '$lib/admin/Menu/MenuLinks.ts';
import type { Dictionaries } from '$lib/admin/admin_i18n.ts';
import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import type { AdminConfig } from '$lib/admin/config/adminConfig.ts';

export type DashboardDefinitionOptions = {
	adminConfig: AdminConfig;
	cruds: Array<CrudDefinition>;
	sideMenu?: Array<MenuLink>;
	topLeftMenu?: Array<MenuLink>;
	topRightMenu?: Array<MenuLink>;
	localeDictionaries?: Dictionaries;
};

export class DashboardDefinition {
	public readonly adminConfig: AdminConfig;
	public readonly cruds: Array<CrudDefinition>;
	public readonly sideMenu: Array<MenuLink> = [];
	public readonly topLeftMenu: Array<MenuLink> = [];
	public readonly topRightMenu: Array<MenuLink> = [];
	public readonly localeDictionaries: Dictionaries = {};

	public readonly options = {};

	constructor(options: DashboardDefinitionOptions) {
		this.adminConfig = options.adminConfig;
		this.cruds = options.cruds;
		this.sideMenu = options.sideMenu || [];
		this.topLeftMenu = options.topLeftMenu || [];
		this.topRightMenu = options.topRightMenu || [];
		this.localeDictionaries = options.localeDictionaries || {};
	}
}
