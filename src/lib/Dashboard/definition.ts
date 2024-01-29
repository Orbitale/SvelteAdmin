import type { MenuLink } from '$lib/Menu/MenuLinks';
import type { Dictionaries } from '$lib/admin_i18n';
import type { CrudDefinition } from '$lib/Crud/definition';
import { type AdminConfig, emptyAdminConfig } from '$lib/config/adminConfig';

export type DashboardDefinitionOptions = {
	adminConfig: Partial<AdminConfig>;
	cruds: Array<CrudDefinition<unknown>>;
	rootUrl?: string;
	sideMenu?: Array<MenuLink>;
	topLeftMenu?: Array<MenuLink>;
	topRightMenu?: Array<MenuLink>;
	localeDictionaries?: Dictionaries;
};

export class DashboardDefinition {
	public readonly adminConfig: AdminConfig;
	public readonly cruds: Array<CrudDefinition<unknown>>;
	public readonly sideMenu: Array<MenuLink> = [];
	public readonly topLeftMenu: Array<MenuLink> = [];
	public readonly topRightMenu: Array<MenuLink> = [];
	public readonly localeDictionaries: Dictionaries = {};

	public readonly options = {};

	constructor(options: DashboardDefinitionOptions) {
		this.adminConfig = { ...emptyAdminConfig(), ...(options.adminConfig || {}) };
		this.cruds = options.cruds;
		this.sideMenu = options.sideMenu || [];
		this.topLeftMenu = options.topLeftMenu || [];
		this.topRightMenu = options.topRightMenu || [];
		this.localeDictionaries = options.localeDictionaries || {};
		this.cruds.forEach((crud: CrudDefinition<unknown>) => (crud.dashboard = this));
		this.checkUniqueCruds();
	}

	public getFirstActionUrl(): string {
		const firstCrud = this.cruds[0];
		const firstOperation = firstCrud.options.operations[0];
		const root = this.adminConfig.rootUrl.replace(/(^\/)|(\/$)/gi, '');

		return `/${root}/${firstCrud.name}/${firstOperation.name}`;
	}

	private checkUniqueCruds() {
		const existingCruds: Array<string> = [];
		this.cruds.forEach((crud: CrudDefinition<unknown>) => {
			if (existingCruds.indexOf(crud.name) >= 0) {
				throw new Error(
					`Crud name "${crud.name}" is used in at least two different Crud objects. Crud names must be unique.`
				);
			}
			existingCruds.push(crud.name);
		});
	}
}
