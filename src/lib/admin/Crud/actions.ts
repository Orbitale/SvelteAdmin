export type CrudActionName =
    | "new"
    | "edit"
    | "list"
    | "delete"
    | string
;

export interface CrudAction {
    readonly name: CrudActionName;
}

export class NewAction implements CrudAction {
    public readonly name: CrudActionName = "new";
}

export class EditAction implements CrudAction {
    public readonly name: CrudActionName = "edit";
}

export class ListAction implements CrudAction {
    public readonly name: CrudActionName = "list";
}

export class DeleteAction implements CrudAction {
    public readonly name: CrudActionName = "delete";
}
