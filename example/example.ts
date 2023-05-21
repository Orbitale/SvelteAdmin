import AdminConfig from "../src/Config/AdminConfig";
import {writable} from 'svelte/store';
import SvelteStoreDataSource from "../src/DataSource/SvelteStoreDataSource";
import List from '../src/Config/List';
import AssociatedField from "../src/Field/AssociatedField";
import TextField from "../src/Field/TextField";

class Category {
    public id: string = '';
    public name: string = '';
    public description: string|null = null;
    public slug: string = '';
}

export default class Post {
    public id: string = '';
    public name: string = '';
    public description: string|null = null;
    public slug: string = '';
    public category: Category|null = null;
    public published_at: Date|null = null;
}

const postStore = writable<Array<Post>>([]);

const dataSource = new SvelteStoreDataSource<Post>(postStore);

const crud = new AdminConfig<Post>(
    new List<Post>(dataSource,
        [
            new TextField('id', 'ID'),
            new TextField('name', 'Name'),
            new TextField('description', 'Description'),
            new TextField('slug', 'URL'),
            new AssociatedField('category', 'Category', new TextField('name')),
        ],
        [],
    ),
);

console.info('CRUD config: ', crud);
