import type { ComponentType } from 'svelte';
import type { Field } from '../FieldDefinitions/Field.ts';
import type { Options } from '../FieldDefinitions/Options.ts';
import CrudNew from './CrudNew.svelte';
import CrudEdit from './CrudEdit.svelte';
import CrudList from './CrudList.svelte';
import CrudDelete from './CrudDelete.svelte';

export type CrudActionName = 'new' | 'edit' | 'list' | 'delete' | string;

export interface CrudAction {
	readonly name: CrudActionName;
	readonly displayComponent: ComponentType;
}

export class BaseCrudAction implements CrudAction {
	readonly name: CrudActionName;
	readonly displayComponent: ComponentType;
	readonly fields: Array<Field<Options>>;

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
