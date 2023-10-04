<script lang="ts">
    import {Form, FormGroup} from "carbon-components-svelte";
    import CrudFormField from "./CrudFormField.svelte";
    import Tabs from "./Tabs.svelte";
    import type {FieldInterface} from "../Fields/Field";
    import {TabsField} from "../Fields/TabsField";
    import {createEventDispatcher} from "svelte";

    export let fields: FieldInterface<any>[] = [];

    let tabbed_fields: Array<TabsField> = [];

    let current_tab: TabsField|null = null;
    for (let i = 0; i < fields.length; i++){
        const field = fields[i];
        if (field instanceof TabsField) {
            current_tab = null;
            tabbed_fields.push(field);
        } else {
            if (!current_tab) {
                current_tab = new TabsField(`tab_${i}`, `Tab #${i+1}`);
                tabbed_fields.push(current_tab);
            }
            current_tab.fields.push(field);
        }
    }

    const dispatchEvent = createEventDispatcher<{
        submitData: Map<string, any>,
    }>();

    function onSubmit(event: SubmitEvent) {
        const data = new FormData(event.target, event.submitter);
        const dataMap = new Map<string, any>();
        data.forEach((value, key) => {
            dataMap.set(key, value);
        });
        dispatchEvent('submitData', dataMap);
    }
</script>

<Form
    on:click
    on:keydown
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:submit="{onSubmit}"
    on:submit
>
    <slot name="form-header"></slot>

    {#if tabbed_fields.length === 1 && tabbed_fields[0].name === 'tab_0'}
        {#each fields as field (field.name)}
            <FormGroup>
                <CrudFormField {field} on:fieldChange />
            </FormGroup>
        {/each}
    {:else}
        <Tabs fields={tabbed_fields} on:fieldChange />
    {/if}

    <slot name="form-footer"></slot>
</Form>
