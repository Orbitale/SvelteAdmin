import type { CrudOperation } from '$lib/Crud/Operations';
import type { StateProvider } from '$lib/State/Provider';
import type { StateProcessor } from '$lib/State/Processor';

export type CrudDefinitionOptions<T> = {
	label: {
		singular: string;
		plural: string;
	};
	defaultOperationName?: string;
	operations: Array<CrudOperation<T>>;
	stateProvider: StateProvider<T>;
	stateProcessor: StateProcessor<T>;
};

export class CrudDefinition<T> {
	public readonly name: string;
	public readonly options: CrudDefinitionOptions<T>;
	public readonly defaultOperation: CrudOperation<T>;

	constructor(name: string, options: CrudDefinitionOptions<T>) {
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

		const defaultOperation = options.operations.filter(
			(operation) => operation.name === defaultOperationName
		);
		if (!defaultOperation || !defaultOperation.length) {
			throw new Error(
				`Crud definition "${name}" has no default operation named "${defaultOperationName}".\nAvailable operation names: ${options.operations
					.map((o) => o.name)
					.join(', ')}.`
			);
		}

		this.defaultOperation = defaultOperation[0];
		this.options = options;
	}
}
