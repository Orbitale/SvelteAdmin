import type { FieldOptions, FieldInterface } from '$lib/FieldDefinitions/definition';
import type { CrudDefinition } from '$lib/Crud/definition';
import type { DashboardDefinition } from '$lib/Dashboard/definition';
import type { Action } from '$lib/actions';
import type { CrudTheme } from '$lib/themes/ThemeConfig';
import { defaultPaginationOptions, type PaginationOptions } from '$lib/DataTable/Pagination';
import type { FilterInterface, FilterOptions } from '$lib/Filter';

export type CrudOperationName = 'new' | 'edit' | 'view' | 'list' | 'delete' | string;

export interface CrudOperation {
	readonly name: CrudOperationName;
	readonly label: string;
	readonly displayComponentName: CrudTheme;
	readonly fields: Array<FieldInterface<FieldOptions>>;
	readonly actions: Array<Action>;
	readonly options: Record<string, string | unknown>;

	get dashboard(): DashboardDefinition;
	set dashboard(dashboard: DashboardDefinition);
	get crud(): CrudDefinition<unknown>;
	set crud(crud: CrudDefinition<unknown>);
}

export class BaseCrudOperation implements CrudOperation {
	private _dashboard: DashboardDefinition|null = null;
	private _crud: CrudDefinition<unknown>|null = null;

	constructor(
		public readonly name: CrudOperationName,
		public readonly label: string,
		public readonly displayComponentName: CrudTheme,
		public readonly fields: Array<FieldInterface<FieldOptions>>,
		public readonly actions: Array<Action>,
		public readonly options: Record<string, string | unknown> = {}
	) {}

	get dashboard(): DashboardDefinition {
		if (!this._dashboard) {
			throw new Error('Dashboard is not set in operation: did you try to bypass Crud setup?');
		}
		return this._dashboard;
	}

	set dashboard(dashboard: DashboardDefinition) {
		if (this._dashboard) {
			throw new Error('Cannot set dashboard twice in an operation.');
		}
		this._dashboard = dashboard;
	}

	get crud(): CrudDefinition<unknown> {
		if (!this._crud) {
			throw new Error('Crud is not set in operation: did you try to bypass Crud setup?');
		}
		return this._crud;
	}

	set crud(crud: CrudDefinition<unknown>) {
		if (this._crud) {
			throw new Error('Cannot set crud twice in an operation.');
		}
		this._crud = crud;
	}
}

export type FormOperationOptions = object & {
	preventHttpFormSubmit: boolean;
};
const DEFAULT_FORM_OPERATION_OPTION: FormOperationOptions = {
	preventHttpFormSubmit: true
};

export class New extends BaseCrudOperation {
	constructor(
		fields: Array<FieldInterface<FieldOptions>>,
		actions: Array<Action> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('new', 'crud.new.label', 'new', fields, actions, options);
	}
}

export class Edit extends BaseCrudOperation {
	constructor(
		fields: Array<FieldInterface<FieldOptions>>,
		actions: Array<Action> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('edit', 'crud.edit.label', 'edit', fields, actions, options);
	}
}

export type ListOperationOptions = object & {
	globalActions?: Array<Action>;
	pagination?: Partial<PaginationOptions>;
	filters?: FilterInterface<FilterOptions>[];
};

export class List extends BaseCrudOperation {
	constructor(
		fields: Array<FieldInterface<FieldOptions>>,
		actions: Array<Action> = [],
		options: Partial<ListOperationOptions> = {}
	) {
		options.pagination = { ...defaultPaginationOptions(), ...(options.pagination || {}) };
		options.filters ??= [];
		super('list', 'crud.list.label', 'list', fields, actions, options);
	}
}

export class Delete extends BaseCrudOperation {
	public readonly redirectTo: Action;

	constructor(fields: Array<FieldInterface<FieldOptions>>, redirectTo: Action) {
		super('delete', 'crud.delete.label', 'delete', fields, []);
		this.redirectTo = redirectTo;
	}
}

export class View extends BaseCrudOperation {
	constructor(fields: Array<FieldInterface<FieldOptions>>) {
		super('view', 'crud.view.label', 'view', fields, []);
	}
}
