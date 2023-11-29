import type { ComponentType, SvelteComponent } from 'svelte';
import type { Field } from '$lib/FieldDefinitions/Field';
import type { Options } from '$lib/FieldDefinitions/Options';
import type { CrudDefinition } from '$lib/Crud/definition';
import type { DashboardDefinition } from '$lib/Dashboard/definition';
import type { Action } from '$lib/actions';
import type { KeyValueObject } from '$lib/genericTypes';
import type { CrudTheme } from '$lib/themes/ThemeConfig';

export type CrudOperationName = 'new' | 'edit' | 'view' | 'list' | 'delete' | string;

export type OperationCallbackName = 'submit' | string;

export type OperationCallback = (event: Event) => unknown | void;
export type OperationEventCallback = [event: OperationCallbackName, callback: OperationCallback];

export type TemplateComponent = ComponentType<
	SvelteComponent<{
		dashboard: DashboardDefinition<unknown>;
		crud: CrudDefinition<unknown>;
		operation: CrudOperation;
		requestParameters: KeyValueObject;
	}>
>;

export interface CrudOperation {
	readonly name: CrudOperationName;
	readonly label: string;
	readonly displayComponentName: CrudTheme;
	readonly fields: Array<Field<Options>>;
	readonly actions: Array<Action>;
	readonly options: Record<string, string | unknown>;
}

export class BaseCrudOperation implements CrudOperation {
	constructor(
		public readonly name: CrudOperationName,
		public readonly label: string,
		public readonly displayComponentName: CrudTheme,
		public readonly fields: Array<Field<Options>>,
		public readonly actions: Array<Action>,
		public readonly options: Record<string, string | unknown> = {}
	) {}
}

export type FormOperationOptions = object & {
	preventHttpFormSubmit: boolean;
};
const DEFAULT_FORM_OPERATION_OPTION: FormOperationOptions = {
	preventHttpFormSubmit: true
};

export class New extends BaseCrudOperation {
	public readonly options: KeyValueObject = {};

	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('new', 'crud.new.label', 'new', fields, actions, options);
	}
}

export class Edit extends BaseCrudOperation {
	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		options: FormOperationOptions = DEFAULT_FORM_OPERATION_OPTION
	) {
		super('edit', 'crud.edit.label', 'edit', fields, actions, options);
	}
}

type ListOperationOptions = object & {
	globalActions?: Array<Action>;
};

export class List extends BaseCrudOperation {
	constructor(
		fields: Array<Field<Options>>,
		actions: Array<Action> = [],
		options: ListOperationOptions = {}
	) {
		super('list', 'crud.list.label', 'list', fields, actions, options);
	}
}

export class Delete extends BaseCrudOperation {
	public readonly redirectTo: Action;

	constructor(
		fields: Array<Field<Options>>,
		redirectTo: Action,
	) {
		super('delete', 'crud.delete.label', 'delete', fields, []);
		this.redirectTo = redirectTo;
	}
}

export class View extends BaseCrudOperation {
	constructor(fields: Array<Field<Options>>) {
		super('view', 'crud.view.label', 'view', fields, []);
	}
}
