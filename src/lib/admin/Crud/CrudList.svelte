<script lang="ts">
    import type {DashboardDefinition} from "../Dashboard/definition.ts";
    import type {CrudDefinition} from "./definition.ts";
    import type {CrudAction} from "./actions.ts";
    import DataTable from "../DataTable/DataTable.svelte";
    import type {Headers, Header} from '../DataTable/types.ts';
    import type {Field} from "../FieldDefinitions/Field.ts";
    import type {StateProvider} from "$lib/admin/State/Provider.ts";

    export let dashboard: DashboardDefinition;
    export let crud: CrudDefinition;
    export let action: CrudAction;

    let fields = action.fields;
    let headers: Headers = action.fields.map((field: Field<Option>): Header => {
        return {key: field.name, value: field.label};
    });
    if (!crud.options.stateProvider) {
        throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
    }
    let stateProvider: StateProvider = crud.options.stateProvider;
    let rows = stateProvider.provide(action);

</script>

<DataTable {action} {headers} {rows}></DataTable>
