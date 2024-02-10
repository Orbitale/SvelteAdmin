<script lang="ts">
    import InlineNotification from "carbon-components-svelte/src/Notification/InlineNotification.svelte";
    import SkeletonText from "carbon-components-svelte/src/SkeletonText/SkeletonText.svelte";

    import {type CrudOperation, Field} from "$lib/Crud/Operations";
    import type {CrudEntityField} from "$lib/FieldDefinitions/CrudEntity";
    import {CrudDefinition} from "$lib/Crud/definition";

    export let field: CrudEntityField;
    export let operation: CrudOperation;
    export let value: unknown;

    const crud: CrudDefinition<unknown>|undefined = operation.dashboard.cruds.filter((def: CrudDefinition<unknown>) => def.name === field.options.crud_name)[0] ?? undefined;

    async function fetchData() {
        if (!crud) {
            return;
        }

        const fieldOperation = new Field(field.options.get_provider_operation?.name ?? 'entity_view', field.options.get_provider_operation?.options ?? {});
        fieldOperation.crud = crud;
        fieldOperation.dashboard = operation.dashboard;
        return crud.options.stateProvider.provide(fieldOperation, {
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
    {#await fetchData()}
        <SkeletonText />
    {:then data}
        {data[field.options.get_provider_operation.entity_field]}
    {:catch error}
        <!-- TODO: translate this -->
        Error!? {error.message}
    {/await}
{/if}
