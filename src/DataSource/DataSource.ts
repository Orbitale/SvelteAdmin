import type Filter from "../Filter/Filter";

export default abstract class DataSource<T> {
    // Example: GET http://my.api.url/posts?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}
    public abstract getList(filters: Array<Filter>): Promise<Array<T>>;

    // Example: GET http://my.api.url/posts/123
    public abstract getOne(): Promise<T|null>;

    // Example: GET http://my.api.url/posts?filter={"ids":[123,456,789]}
    public abstract getByIds(): Promise<Array<T>>;

    // Example: GET http://my.api.url/posts?filter={"author_id":345}
    public abstract getByProperties(): Promise<Array<T>>;

    // Example: POST http://my.api.url/posts
    public abstract create(newEntity: T): Promise<T>;

    // Example: PUT http://my.api.url/posts/123
    public abstract update(newEntityState: T): Promise<T>;

    // Example: Multiple calls to PUT http://my.api.url/posts/123
    public abstract updateMany(newEntitiesStates: Array<T>): Promise<Array<T>>;

    // Example: DELETE http://my.api.url/posts/123
    public abstract delete(entity: T): Promise<any>;

    // Example: Multiple calls to DELETE http://my.api.url/posts/123
    public abstract deleteMany(entities: Array<T>): Promise<any>;
}
