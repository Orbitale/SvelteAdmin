import type DataSource from "../DataSource/DataSource";
import type Field from "../Field/Field";
import type Action from "../Action/Action";

export default class List<T> {
    private readonly dataSource: DataSource<T>;
    private readonly fields: Array<Field>;
    private readonly actions: Array<Action<T>>;

    constructor(
        dataSource: DataSource<T>,
        fields: Array<Field>,
        actions: Array<Action<T>>,
    ) {
        if (fields.length === 0) {
            throw new Error('You must provide at least one field to display in your list.');
        }
        this.dataSource = dataSource;
        this.fields = fields;
        this.actions = actions;
    }
}
