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
import type { KeyValueObject } from '$lib/admin/genericTypes.ts';

export type CrudOperationName = 'new' | 'edit' | 'view' | 'list' | 'delete' | string;

export type OperationCallbackName = 'submit' | string;

export type OperationCallback = (event: Event) => unknown | void;
export type OperationEventCallback = [event: OperationCallbackName, callback: OperationCallback];

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
	readonly actions: Array<Action>;
	readonly eventHandlers: Array<OperationEventCallback>;
	readonly options: object;
}

export class BaseCrudOperation<T> implements CrudOperation<T> {
	public readonly name: CrudOperationName;
	public readonly displayComponent: TemplateComponent<T>;
	public readonly fields: Array<Field<Options>>;
	public readonly label: string;
	public readonly actions: Array<Action>;
	public readonly eventHandlers: Array<OperationEventCallback> = [];
	public readonly options: object = {};

	constructor(
		name: CrudOperationName,
		label: string,
		displayComponent: TemplateComponent<T>,
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		eventHandlers: Array<OperationEventCallback> = [],
		options: object = {}
	) {
		this.name = name;
		this.label = label;
		this.displayComponent = displayComponent;
		this.fields = fields;
		this.actions = actions;
		this.eventHandlers = eventHandlers;
		this.options = options;
	}
}

type FormOperationOptions = object & {
	preventHttpFormSubmit: boolean;
};
const DEFAULT_FORM_OPERATION_OPTION: FormOperationOptions = {
	preventHttpFormSubmit: true,
};

export class New<T> extends BaseCrudOperation<T> {
	public readonly options: KeyValueObject = {};

	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		eventHandlers: Array<OperationEventCallback> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('new', 'crud.new.label', CrudNew, fields, actions, eventHandlers, options);
	}
}

export class Edit<T> extends BaseCrudOperation<T> {
	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		eventHandlers: Array<OperationEventCallback> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('edit', 'crud.edit.label', CrudEdit, fields, actions, eventHandlers, options);
	}
}

type ListOperationOptions = object & {
	globalActions?: Array<Action>;
};

export class List<T> extends BaseCrudOperation<T> {
	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		eventHandlers: Array<OperationEventCallback> = [],
		options: ListOperationOptions = {}
	) {
		super('list', 'crud.list.label', CrudList, fields, actions, eventHandlers, options);
	}
}

export class Delete<T> extends BaseCrudOperation<T> {
	public readonly redirectTo: Action;

	constructor(
		fields: Array<Field<Options>>,
		redirectTo: Action,
		eventHandlers: Array<OperationEventCallback> = []
	) {
		super('delete', 'crud.delete.label', CrudDelete, fields, [], eventHandlers);
		this.redirectTo = redirectTo;
	}
}
