import type DataSource from "../DataSource/DataSource";

export default class Create<T> {
    private readonly dataSource: DataSource<T>;

    constructor(dataSource: DataSource<T>) {
        this.dataSource = dataSource;
    }
}
