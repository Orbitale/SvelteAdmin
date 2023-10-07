import type {CrudAction} from "./actions.ts";
import {StateProcessor, StateProvider} from "../State/Provider.ts";

export type CrudDefinitionOptions = {
    actions: Array<CrudAction>,
    stateProvider?: StateProvider,
    stateProcessor?: StateProcessor,
};

export class CrudDefinition {
    protected readonly _options: CrudDefinitionOptions;

    constructor(options: CrudDefinitionOptions) {
        this._options = options;
    }
}
