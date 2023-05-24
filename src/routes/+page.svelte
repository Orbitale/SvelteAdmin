<script lang="ts">
    import {writable} from "svelte/store";
    import SvelteStoreDataSource from "../lib/DataSource/SvelteStoreDataSource.js";
    import AdminConfig from "../lib/Config/AdminConfig.js";
    import List from "../lib/Config/List.js";
    import TextField from "../lib/Field/TextField.js";
    import AssociatedField from "../lib/Field/AssociatedField.js";
    import Crud from "../lib/Crud.svelte";

    class Category {
        public id: string = '';
        public name: string = '';
        public description: string|null = null;
        public slug: string = '';
    }

    class Post {
        public id: string = '';
        public name: string = '';
        public description: string|null = null;
        public slug: string = '';
        public category: Category|null = null;
        public published_at: Date|null = null;
    }

    const postStore = writable<Array<Post>>([]);

    const dataSource = new SvelteStoreDataSource<Post>(postStore);

    const config = new AdminConfig<Post>(
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

    let toAdd: string = '';
    function addElement() {
        const post = new Post();
        post.name = toAdd;
        toAdd = '';
        postStore.update((posts: Array<Post>) => [...posts, post]);
    }
</script>

<div id="controls">
    <label for="add">Add element</label>
    <input type="text" id="add" bind:value={toAdd}>
    <button type="button" on:click={addElement}>Add</button>
</div>

<Crud {config} />
