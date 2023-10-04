<script lang="ts">
    import {Tabs, Tab, TabContent} from "carbon-components-svelte";
    import CrudFormField from "./CrudFormField.svelte";
    import {TabsField} from "$lib/admin/Fields/TabsField";

    export let fields: Array<TabsField> = [];
</script>

<Tabs>
    {#each fields as tabbed_field (tabbed_field.name)}
        <Tab label="{tabbed_field.label}" />
    {/each}
    <svelte:fragment slot="content">
        {#each fields as tabbed_field (tabbed_field.name)}
            <TabContent>
                <CrudFormField field={tabbed_field} on:fieldChange />
            </TabContent>
        {/each}
    </svelte:fragment>
</Tabs>
