import { get, writable, type Writable } from 'svelte/store';
import {
	type AdminConfig,
	type MenuLink,
	type CrudDefinition,
	type Dictionaries,
	defaultAdminConfig,
	type ThemeConfig
} from '$lib';

/** */
export type DashboardStores = {
	sideMenu: Writable<Array<MenuLink>>;
	topLeftMenu: Writable<Array<MenuLink>>;
	topRightMenu: Writable<Array<MenuLink>>;
};

/**
 */
export type DashboardDefinitionOptions = {
	theme: ThemeConfig;
	adminConfig: Partial<AdminConfig>;
	cruds: Array<CrudDefinition<unknown>>;
	rootUrl?: string;
	sideMenu?: Array<MenuLink>;
	topLeftMenu?: Array<MenuLink>;
	topRightMenu?: Array<MenuLink>;
	localeDictionaries?: Dictionaries;
};

/**
 * @example
 * export const dashboard = new DashboardDefinition({
 *    theme: carbon, // Import from the lib's themes
 *    admin: ..., // see AdminConfig
 *
 *    // The main menu on the left side of the page
 *    sideMenu: [
 *        new UrlAction('Homepage', '/', Home),
 *        new UrlAction('Book', '/admin/books/list', Book)
 *    ],
 *
 *    // Here you set all the Crud configurations of your admin panel
 *    // For organization purposes, we recommend you to define your Crud configs
 *    //   in separate typescript files, it makes it easier to read and maintain.
 *    cruds: [booksCrud]
 * });
 */
export class DashboardDefinition {
	/** */ public readonly theme: ThemeConfig;
	/** */ public readonly adminConfig: AdminConfig;
	/** */ public readonly cruds: Array<CrudDefinition<unknown>>;
	/** */ public readonly localeDictionaries: Dictionaries = {};
	/** */ public readonly stores: DashboardStores;

	public readonly options = {};

	/** */
	constructor(options: DashboardDefinitionOptions) {
		this.theme = options.theme;
		this.adminConfig = { ...defaultAdminConfig(), ...(options.adminConfig || {}) };
		this.cruds = options.cruds;
		this.localeDictionaries = options.localeDictionaries || {};
		this.cruds.forEach((crud: CrudDefinition<unknown>) => (crud.dashboard = this));
		this.stores = {
			sideMenu: writable(options.sideMenu || []),
			topLeftMenu: writable(options.topLeftMenu || []),
			topRightMenu: writable(options.topRightMenu || [])
		};
		this.checkUniqueCruds();
	}

	/** @deprecated Use builtin Dashboard stores instead */
	get sideMenu(): Array<MenuLink> {
		return get(this.stores.sideMenu);
	}

	/** @deprecated Use builtin Dashboard stores instead */
	get topLeftMenu(): Array<MenuLink> {
		return get(this.stores.topLeftMenu);
	}

	/** @deprecated Use builtin Dashboard stores instead */
	get topRightMenu(): Array<MenuLink> {
		return get(this.stores.topRightMenu);
	}

	/** */
	public getFirstActionUrl(): string {
		const firstCrud = this.cruds[0];
		const firstOperation = firstCrud.options.operations[0];
		const root = this.adminConfig.rootUrl.replace(/(^\/*)|(\/*$)/gi, '') || '';

		return `${root ? '/' + root : ''}/${firstCrud.name}/${firstOperation.name}`;
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
