import type { CrudOperation } from '$lib/Crud/Operations';
import type { StateProvider } from '$lib/State/Provider';
import type { StateProcessor } from '$lib/State/Processor';

export type CrudDefinitionOptionsArgument<T> = {
	name: string,
	label: {
		singular: string;
		plural: string;
	};
	defaultOperationName?: string;
	identifierFieldName?: 'id' | string;
	minStateLoadingTimeMs?: number;

	operations: Array<CrudOperation>;
	stateProvider: StateProvider<T>;
	stateProcessor: StateProcessor<T>;
};

export type CrudDefinitionOptions<T> = Required<CrudDefinitionOptionsArgument<T>>;

export class CrudDefinition<T> {
	public readonly name: string;
	public readonly options: CrudDefinitionOptions<T>;

	constructor(options: CrudDefinitionOptionsArgument<T>) {
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

		options.defaultOperationName = defaultOperation.name;
		options.identifierFieldName ??= 'id';

		this.options = options as CrudDefinitionOptions<T>;
	}
}
