import type {ComponentType, SvelteComponent} from 'svelte';
import type { Field } from '../FieldDefinitions/Field.ts';
import type { Options } from '../FieldDefinitions/Options.ts';
import CrudNew from './CrudNew.svelte';
import CrudEdit from './CrudEdit.svelte';
import CrudList from './CrudList.svelte';
import CrudDelete from './CrudDelete.svelte';
import type {CrudDefinition} from "$lib/admin/Crud/definition.ts";
import type {DashboardDefinition} from "$lib/admin/Dashboard/definition.ts";

export type CrudActionName = 'new' | 'edit' | 'list' | 'delete' | string;

export interface CrudAction {
	readonly name: CrudActionName;
	readonly displayComponent: ComponentType<SvelteComponent<{
		dashboard: DashboardDefinition,
		crud: CrudDefinition;
		crudAction: CrudAction;
	}>>;
	readonly fields: Array<Field<Options>>;
}

export class BaseCrudAction implements CrudAction {
	public readonly name: CrudActionName;
	public readonly displayComponent: ComponentType;
	public readonly fields: Array<Field<Options>>;

	constructor(
		name: CrudActionName,
		displayComponent: ComponentType,
		fields: Array<Field<Options>>
	) {
		this.name = name;
		this.displayComponent = displayComponent;
		this.fields = fields;
	}
}

export class NewAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>) {
		super('new', CrudNew, fields);
	}
}

export class EditAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>) {
		super('edit', CrudEdit, fields);
	}
}

export class ListAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>) {
		super('list', CrudList, fields);
	}
}

export class DeleteAction extends BaseCrudAction {
	constructor(fields: Array<Field<Options>>) {
		super('delete', CrudDelete, fields);
	}
}
