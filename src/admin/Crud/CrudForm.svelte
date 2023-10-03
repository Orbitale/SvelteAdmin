<script lang="ts">
    import CrudFormField from "./CrudFormField.svelte";
    import type {FieldInterface} from "../Fields/Field";
    import {FormGroup} from "carbon-components-svelte";

    export let fields: FieldInterface<any>[] = [];
</script>

{#each fields as field}
    <FormGroup>
        <CrudFormField {field} />
    </FormGroup>
{/each}
