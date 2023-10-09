<script lang="ts">
    import {UnorderedList} from "carbon-components-svelte";

    import {dashboard} from "$lib/testApp/Dashboard.ts";
    import Dashboard from "$lib/admin/Dashboard/Dashboard.svelte";
</script>

<Dashboard {dashboard}>
    <h1>Svelte Admin demo app</h1>

    <p>This is a custom default page.</p>

    <p>Here are the available CRUDs:</p>

    <UnorderedList expressive={true}>
        {#each dashboard.options.cruds as crud}
            <li>
                <a href="/admin/{crud.name}/{crud.defaultAction}">
                    {crud.options.label}
                </a>
            </li>
        {/each}
    </UnorderedList>
</Dashboard>

<style>
    li {
      list-style-type: disc;
      list-style-position: inside;
    }
</style>
