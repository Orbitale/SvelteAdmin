<script lang="ts">
    import {Tabs, Tab, TabContent} from "carbon-components-svelte";
    import CrudFormField from "./CrudFormField.svelte";
    import {TabsField} from "../FieldDefinitions/TabsField";
    import type {CrudActionName} from "./actions";

    export let action: CrudActionName;
    export let fields: Array<TabsField> = [];
</script>

<Tabs>
    {#each fields as tabbed_field (tabbed_field.name)}
        <Tab label="{tabbed_field.label}" />
    {/each}
    <svelte:fragment slot="content">
        {#each fields as tabbed_field (tabbed_field.name)}
            <TabContent>
                <CrudFormField {action} field={tabbed_field} on:fieldChange />
            </TabContent>
        {/each}
    </svelte:fragment>
</Tabs>
