<script lang="ts">
    import {Toggle} from "carbon-components-svelte";
    import {ToggleField, type ToggleOptions} from "../../Fields/Toggle";

    export let field: ToggleField<ToggleOptions>;
</script>

<Toggle
    labelText="{field.label}"
    helperText="{field.options.help}"
/>
