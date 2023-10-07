import type {AdminConfig} from "../config/types.ts";
import type {MenuLink} from "../Menu/MenuLinks.ts";
import type {Dictionaries} from "../admin_i18n.ts";
import type {CrudDefinition} from "$lib/admin/Crud/definition.ts";

export type DashboardDefinitionOptions = {
    admin: AdminConfig,
    sideMenu: Array<MenuLink>,
    topLeftMenu: Array<MenuLink>,
    topRightMenu: Array<MenuLink>,
    locales: Array<string>,
    localeDictionaries: Dictionaries,
    cruds: Array<CrudDefinition>
};

export class DashboardDefinition {
    private readonly _options: DashboardDefinitionOptions;

    constructor(options: DashboardDefinitionOptions) {
        this._options = options;
    }

    get options(): DashboardDefinitionOptions {
        return this._options;
    }
}
