import { type CrudOperation, type StateProvider, type StateProcessor, type DashboardDefinition } from '$lib';

/** */
export type CrudDefinitionOptionsArgument<EntityType> = {
	name: string;
	label: {
		singular: string;
		plural: string;
	};
	defaultOperationName?: string;
	identifierFieldName?: 'id' | string;

	/**
	 * Will apply a default minimum timeout (in milliseconds) when running a {@link StateProvider} or {@link StateProcessor}.
	 * If this option is defined, and the provider or processor call's duration is below this value, it will still wait this amount of time before returning the actual provider/processor value.
	 *
	 * The goal of this is to avoid epilepsy-like issues if providers or processors respond too quickly, especially when dealing with List operations and filters.
	 * This will create a "wait time" for the end user, so that the screen does not blink too much and there eyes (and brain) will not be stressed too much.
	 */
	minStateLoadingTimeMs?: number;

	operations: Array<CrudOperation>;
	stateProvider: StateProvider<EntityType>;
	stateProcessor: StateProcessor<EntityType>;
};

export type CrudDefinitionOptions<EntityType> = Required<CrudDefinitionOptionsArgument<EntityType>>;

/**
 * Crud definition, object used to create an abstract Crud.
 *
 * @remarks
 * Crud objects are related to a single Entity type,
 * and contain several Crud Operations, as well as the main
 * objects that care about persistence: state providers and processors.
 *
 * @example
 * type Book = {id: number, title: string, description: string};
 *
 * const BooksCrud = new CrudDefinition<Book>({
 *     name: 'books',
 *     label: {singular: 'Book', plural: 'Books'},
 *     operations: [],
 *     stateProvider: ...,
 *     stateProcessor: ...,
 * });
 *
 * @typeParam EntityType - The object type that will be used by providers and processors.
 */
export class CrudDefinition<EntityType> {
	/** */ public readonly name: string;
	/** */ public readonly options: CrudDefinitionOptions<EntityType>;
	private _dashboard: DashboardDefinition | null = null;

	/**
	 * @param {CrudDefinitionOptionsArgument} options
	 **/
	constructor(options: CrudDefinitionOptionsArgument<EntityType>) {
		const name = options.name;
		this.name = name;

		if (!options?.operations.length) {
			throw new Error(
				`Crud definition "${name}" has no Crud operations set.\nDid you forget to add an "operations" key when creating your Crud definition?`
			);
		}

		const defaultOperationName = options.defaultOperationName || options.operations[0]?.name;
		if (!defaultOperationName || !defaultOperationName.length) {
			throw new Error(
				`Crud definition "${name}" has an invalid default operation name "${defaultOperationName}".\nYou can fix this issue by customizing the "defaultOperationName" option when creating your Crud definition.`
			);
		}

		const defaultOperation = options.operations
			.filter((operation) => operation.name === defaultOperationName)
			.shift();
		if (!defaultOperation) {
			throw new Error(
				`Crud definition "${name}" has no default operation named "${defaultOperationName}".\nAvailable operation names: ${options.operations
					.map((o) => o.name)
					.join(', ')}.`
			);
		}
		options.operations.forEach((operation: CrudOperation) => (operation.crud = this));

		options.defaultOperationName = defaultOperation.name;
		options.identifierFieldName ??= 'id';

		this.options = options as CrudDefinitionOptions<EntityType>;
	}

	/** */
	get dashboard(): DashboardDefinition {
		if (!this._dashboard) {
			throw new Error('Dashboard is not set in Crud definition: did you try to bypass Crud setup?');
		}
		return this._dashboard;
	}

	set dashboard(dashboard: DashboardDefinition) {
		if (this._dashboard === dashboard) {
			return;
		}
		if (this._dashboard) {
			console.error('Dashboard was set twice in a Crud definition. If you are using HMR in development, you can ignore this issue.');
		}
		this.options.operations.forEach((operation) => {
			operation.dashboard = dashboard;
		});
		this._dashboard = dashboard;
	}
}
