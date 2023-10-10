import type { CrudAction } from './actions.ts';
import type { StateProvider } from '../State/Provider.ts';
import type { StateProcessor } from '../State/Processor.ts';

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
