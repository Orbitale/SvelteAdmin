import DataSource from "./DataSource";
import type {Writable} from 'svelte/store';
import type Filter from "../Filter/Filter";

// TODO
export default class SvelteStoreDataSource<T> extends DataSource<T> {
    private readonly store: Writable<Array<T>>;
    private data: Array<T> = [];

    constructor(store: Writable<Array<T>>) {
        super();
        this.store = store;
        this.store.subscribe(this.storeSubscriber)
    }

    private storeSubscriber(data: Array<T>|null|undefined) {
        if (Array.isArray(data)) {
            this.data = data;
        } else if (data !== null && data !== undefined) {
            throw new Error(`Could not set store data. Expected an array of objects, got "${typeof data}" instead.`);
        }
    }

    public getList(filters: Array<Filter>): Promise<Array<T>> {
        // TODO
        return Promise.resolve([]);
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
