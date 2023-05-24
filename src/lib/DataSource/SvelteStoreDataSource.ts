import DataSource from "./DataSource.js";
import type {Writable} from 'svelte/store';
import type Filter from "../Filter/Filter.js";

export default class SvelteStoreDataSource<T> extends DataSource<T> {
    private readonly store: Writable<Array<T>>;
    private data: Array<T> = [];

    constructor(store: Writable<Array<T>>) {
        super();
        this.store = store;
        this.subscribeToStore();
    }

    private subscribeToStore() {
        this.store.subscribe((data: Array<T>|null|undefined) => {
            if (data === null || data === undefined) {
                return;
            }

            console.info('storeSub', data);
            if (!Array.isArray(data)) {
                throw new Error(`Could not set store data. Expected an array of objects, got "${typeof data}" instead.`);
            }

            this.data = data;
        })
    }

    public getList(filters: Array<Filter>): Promise<Array<T>> {
        return Promise.resolve(this.data);
    }

    public getOne(): Promise<T|null> {
        // TODO
        return Promise.resolve(null);
    }

    public getByIds(): Promise<Array<T>> {
        // TODO
        return Promise.resolve([]);
    }

    public getByProperties(): Promise<Array<T>> {
        // TODO
        return Promise.resolve([]);
    }

    public create(newEntity: T): Promise<T> {
        // TODO
        return Promise.resolve(newEntity);
    }

    public update(newEntityState: T): Promise<T> {
        // TODO
        return Promise.resolve(newEntityState);
    }

    public updateMany(newEntitiesStates: Array<T>): Promise<Array<T>> {
        // TODO
        return Promise.resolve(newEntitiesStates);
    }

    public delete(entity: T): Promise<any> {
        // TODO
        return Promise.resolve(entity);
    }

    public deleteMany(entities: Array<T>): Promise<any> {
        // TODO
        return Promise.resolve([]);
    }

};
