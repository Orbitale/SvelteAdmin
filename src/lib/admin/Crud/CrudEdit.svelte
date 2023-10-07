<script lang="ts">
    import {_} from "svelte-i18n";
    import type {FieldInterface} from "../FieldDefinitions/Field";
    import CrudForm from "./CrudForm.svelte";

    export let fields: FieldInterface<any>[] = [];
</script>

<CrudForm
    {fields}
    action="edit"
    on:click
    on:keydown
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:submit
    on:submitData
>
    <svelte:fragment slot="form-header">
        <h1>{$_('crud.header.edit')}</h1>
    </svelte:fragment>
</CrudForm>
