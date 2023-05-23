import type DataSource from "../DataSource/DataSource.js";

export default class Edit<T> {
    private readonly dataSource: DataSource<T>;

    constructor(dataSource: DataSource<T>) {
        this.dataSource = dataSource;
    }
}
