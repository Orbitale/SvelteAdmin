import type { ComponentType, SvelteComponent } from 'svelte';
import type { Field } from '$lib/admin/FieldDefinitions/Field.ts';
import type { Options } from '$lib/admin/FieldDefinitions/Options.ts';
import CrudNew from '$lib/admin/Crud/CrudNew.svelte';
import CrudEdit from '$lib/admin/Crud/CrudEdit.svelte';
import CrudList from '$lib/admin/Crud/CrudList.svelte';
import CrudDelete from '$lib/admin/Crud/CrudDelete.svelte';
import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import type { DashboardDefinition } from '$lib/admin/Dashboard/definition.ts';
import type { Action } from '$lib/admin/actions.ts';

export type CrudOperationName = 'new' | 'edit' | 'view' | 'list' | 'delete' | string;

export type TemplateComponent<T> = ComponentType<
	SvelteComponent<{
		dashboard: DashboardDefinition<T>;
		crud: CrudDefinition<T>;
		crudOperation: CrudOperation<T>;
	}>
>;

export interface CrudOperation<T> {
	readonly name: CrudOperationName;
	readonly label: string;
	readonly displayComponent: TemplateComponent<T>;
	readonly fields: Array<Field<Options>>;
	readonly actions: Action[];
}

export class BaseCrudOperation<T> implements CrudOperation<T> {
	public readonly name: CrudOperationName;
	public readonly displayComponent: TemplateComponent<T>;
	public readonly fields: Array<Field<Options>>;
	public readonly label: string;
	public readonly actions: Action[];

	constructor(
		name: CrudOperationName,
		label: string,
		displayComponent: TemplateComponent<T>,
		fields: Array<Field<Options>>,
		actions: Action[] = []
	) {
		this.name = name;
		this.label = label;
		this.displayComponent = displayComponent;
		this.fields = fields;
		this.actions = actions;
	}
}

export class New<T> extends BaseCrudOperation<T> {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('new', 'crud.new.label', CrudNew, fields, actions);
	}
}

export class Edit<T> extends BaseCrudOperation<T> {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('edit', 'crud.edit.label', CrudEdit, fields, actions);
	}
}

export class List<T> extends BaseCrudOperation<T> {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('list', 'crud.list.label', CrudList, fields, actions);
	}
}

export class Delete<T> extends BaseCrudOperation<T> {
	public readonly redirectTo: Action;

	constructor(fields: Array<Field<Options>>, redirectTo: Action) {
		super('delete', 'crud.delete.label', CrudDelete, fields, []);
		this.redirectTo = redirectTo;
	}
}
