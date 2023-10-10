<script lang="ts">
    import type {CrudDefinition} from "./definition.ts";
    import type {CrudAction} from "./actions.ts";
    import DataTable from "../DataTable/DataTable.svelte";
    import {type Headers, type Header, createEmptyRow} from '../DataTable/DataTable.ts';
    import type {Field} from "../FieldDefinitions/Field.ts";
    import type {StateProvider} from "../State/Provider.ts";
    import {_} from "svelte-i18n";

    export let crud: CrudDefinition;
    export let action: CrudAction;

    const actions = action.actions;
    const headers: Headers = action.fields.map((field: Field<Option>): Header => {
        return {key: field.name, value: field.label};
    });
    if (!crud.options.stateProvider) {
        throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
    }
    const stateProvider: StateProvider = crud.options.stateProvider;
    let rows = stateProvider.provide(action);
    if (!rows.length) {
        rows = [createEmptyRow(action)];
    }
</script>

<h2>{$_(action.label, {values: {name: $_(crud.options.label.plural)}})}</h2>

<DataTable {headers} {rows} {actions}></DataTable>
