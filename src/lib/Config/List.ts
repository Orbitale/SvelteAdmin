import type DataSource from "../DataSource/DataSource.js";
import type Field from "../Field/Field.js";
import type Action from "../Action/Action.js";
import type Filter from "../Filter/Filter.js";

export default class List<T> {
    private readonly dataSource: DataSource<T>;
    public readonly fields: Array<Field>;
    public readonly actions: Array<Action>;

    constructor(
        dataSource: DataSource<T>,
        fields: Array<Field>,
        actions: Array<Action>,
    ) {
        if (fields.length === 0) {
            throw new Error('You must provide at least one field to display in your list.');
        }
        this.dataSource = dataSource;
        this.fields = fields;
        this.actions = actions;
    }

    public async getData(filters: Array<Filter> = []): Promise<Array<T>> {
        return await this.dataSource.getList(filters);
    }
}
