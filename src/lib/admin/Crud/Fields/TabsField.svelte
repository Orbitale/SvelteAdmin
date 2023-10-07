<script lang="ts">
    import {TabsField, type TabOptions} from "../../FieldDefinitions/TabsField";
    import CrudFormField from "../CrudFormField.svelte";
    import {FormGroup} from "carbon-components-svelte";

    export let field: TabsField<TabOptions>;
</script>

{#each field.fields as field}
    <FormGroup>
        <CrudFormField {field} />
    </FormGroup>
{/each}
