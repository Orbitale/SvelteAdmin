import type { CrudAction } from '$lib/admin/Crud/actions.ts';
import type { StateProvider } from '$lib/admin/State/Provider.ts';
import type { StateProcessor } from '$lib/admin/State/Processor.ts';

export type CrudDefinitionOptions = {
	label: {
		singular: string;
		plural: string;
	};
	defaultAction?: string;
	actions: Array<CrudAction>;
	stateProvider?: StateProvider;
	stateProcessor?: StateProcessor;
};

export class CrudDefinition {
	public readonly name: string;
	public readonly options: CrudDefinitionOptions;
	public readonly defaultAction: string;

	constructor(name: string, options: CrudDefinitionOptions) {
		this.name = name;
		options.defaultAction = options.defaultAction || options.actions[0]?.name;
		this.defaultAction = options.defaultAction;
		this.options = options;
	}
}
