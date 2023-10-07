import {CrudAction} from "../Crud/actions.ts";
import {KeyValueObject} from "../generic_types.ts";

export interface StateProvider {
    provide(operation: CrudAction, requestParameters: KeyValueObject): object|Array<any>|null;
}

export interface StateProcessor {
    process(data: any, operation: CrudAction, requestParameters: KeyValueObject): void;
}
