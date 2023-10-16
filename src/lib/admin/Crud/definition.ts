import type { CrudAction } from '$lib/admin/Crud/actions.ts';
import type { StateProvider } from '$lib/admin/State/Provider.ts';
import type { StateProcessor } from '$lib/admin/State/Processor.ts';

export type CrudDefinitionOptions<T> = {
	label: {
		singular: string;
		plural: string;
	};
	defaultAction?: string;
	actions: Array<CrudAction<T>>;
	stateProvider?: StateProvider<T>;
	stateProcessor?: StateProcessor<T>;
};

export class CrudDefinition<T> {
	public readonly name: string;
	public readonly options: CrudDefinitionOptions<T>;
	public readonly defaultAction: string;

	constructor(name: string, options: CrudDefinitionOptions<T>) {
		this.name = name;
		options.defaultAction = options.defaultAction || options.actions[0]?.name;
		this.defaultAction = options.defaultAction;
		this.options = options;
	}
}
