<script lang="ts">
    import {NumberInput} from "carbon-components-svelte";
    import {NumberField, type NumberOptions} from "../../Fields/Number";

    export let field: NumberField<NumberOptions>;
</script>

<NumberInput
    label="{field.label}"
    helperText="{field.options.help}"
    min={field.options.min}
    max={field.options.max}
/>
