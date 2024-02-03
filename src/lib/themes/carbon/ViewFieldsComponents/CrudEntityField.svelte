<script lang="ts">
    import {type CrudOperation, Field} from "$lib/Crud/Operations";
    import type {CrudEntityField} from "$lib/FieldDefinitions/CrudEntity";
    import {CrudDefinition} from "$lib/Crud/definition";
    import InlineNotification from "carbon-components-svelte/src/Notification/InlineNotification.svelte";
    import {onMount} from "svelte";

    export let field: CrudEntityField;
    export let operation: CrudOperation;
    export let value: unknown;

    let dataPromise: Promise<unknown> = Promise.resolve(null);

    const crud: CrudDefinition<unknown>|undefined = operation.dashboard.cruds.filter((def: CrudDefinition<unknown>) => def.name === field.options.crud_name)[0] ?? undefined;

    fetchData();

    onMount(async () => {
        const resolved = await dataPromise;
        if (!resolved) {
            await fetchData();
        }
    });

    async function fetchData() {
        if (!crud) {
            return;
        }

        const fieldOperation = new Field(field.options.get_provider_operation?.name ?? 'entity_view', field.options.get_provider_operation?.options ?? {});
        fieldOperation.crud = crud;
        fieldOperation.dashboard = operation.dashboard;
        dataPromise = crud.options.stateProvider.provide(fieldOperation, {
            field_value: value,
        });
    }
</script>

{#if !crud}
    <InlineNotification kind="error" hideCloseButton>
        <!-- TODO: translate this -->
        Crud not found: {field.options.crud_name}
    </InlineNotification>
{:else}
    {#await dataPromise}
        <!-- TODO: translate this -->
        Loading...
    {:then data}
        {data[field.options.get_provider_operation.entity_field]}
    {:catch error}
        <!-- TODO: translate this -->
        Error!? {error.message}
    {/await}
{/if}
