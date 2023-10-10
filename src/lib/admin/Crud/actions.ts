import type { ComponentType, SvelteComponent } from 'svelte';
import type { Field } from '../FieldDefinitions/Field.ts';
import type { Options } from '../FieldDefinitions/Options.ts';
import CrudNew from './CrudNew.svelte';
import CrudEdit from './CrudEdit.svelte';
import CrudList from './CrudList.svelte';
import CrudDelete from './CrudDelete.svelte';
import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import type { DashboardDefinition } from '$lib/admin/Dashboard/definition.ts';
import type { Action } from '$lib/admin/actions.ts';

export type CrudActionName = 'new' | 'edit' | 'list' | 'delete' | string;

export interface CrudAction {
	readonly name: CrudActionName;
	readonly label: string;
	readonly displayComponent: ComponentType<
		SvelteComponent<{
			dashboard: DashboardDefinition;
			crud: CrudDefinition;
			crudAction: CrudAction;
		}>
	>;
	readonly fields: Array<Field<Options>>;
	readonly actions: Action[];
}

export class BaseCrudAction implements CrudAction {
	public readonly name: CrudActionName;
	public readonly displayComponent: ComponentType;
	public readonly fields: Array<Field<Options>>;
	public readonly label: string;
	public readonly actions: Action[];

	constructor(
		name: CrudActionName,
		label: string,
		displayComponent: ComponentType,
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

export class NewAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('new', 'crud.new.label', CrudNew, fields, actions);
	}
}

export class EditAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('edit', 'crud.edit.label', CrudEdit, fields, actions);
	}
}

export class ListAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('list', 'crud.list.label', CrudList, fields, actions);
	}
}

export class DeleteAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>, actions: Action[] = []) {
		super('delete', 'crud.delete.label', CrudDelete, fields, actions);
	}
}
