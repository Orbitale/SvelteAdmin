import type { MenuLink } from '../Menu/MenuLinks.ts';
import type { Dictionaries } from '../admin_i18n.ts';
import type { CrudDefinition } from '../Crud/definition.ts';
import type { AdminConfig } from '../config/adminConfig.ts';

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
