import type List from "./List.js";
import type Create from "./Create.js";
import type Edit from "./Edit.js";
import type Show from "./Show.js";

export default class AdminConfig<T> {
    public readonly list: List<T>;
    public readonly create: Create<T>|null = null;
    public readonly edit: Edit<T>|null = null;
    public readonly show: Show<T>|null = null;

    constructor(
        list: List<T>,
        create: Create<T> | null = null,
        edit: Edit<T> | null = null,
        show: Show<T> | null = null,
    ) {
        this.list = list;
        this.create = create;
        this.edit = edit;
        this.show = show;
    }
}
