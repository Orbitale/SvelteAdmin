import DataSource from "../DataSource/DataSource";
import Field from "../Field/Field";

export default class Show<T> {
    private readonly dataSource: DataSource<T>;
    private readonly fields: Array<Field>;

    constructor(dataSource: DataSource<T>, fields: Array<Field>) {
        this.dataSource = dataSource;
        this.fields = fields;
    }
}
