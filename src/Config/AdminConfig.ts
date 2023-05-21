import type List from "./List";
import type Create from "./Create";
import type Edit from "./Edit";
import type Show from "./Show";

export default class AdminConfig<T> {
    private readonly list: List<T>;
    private readonly create: Create<T>|null = null;
    private readonly edit: Edit<T>|null = null;
    private readonly show: Show<T>|null = null;

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
