<script lang="ts">
    import {Checkbox} from "carbon-components-svelte";
    import {CheckboxField, type CheckboxOptions} from "../../Fields/Checkbox";

    export let field: CheckboxField<CheckboxOptions>;
</script>

<Checkbox
    labelText="{field.label}"
/>
