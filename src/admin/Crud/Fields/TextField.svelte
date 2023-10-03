<script lang="ts">
    import {TextInput} from "carbon-components-svelte";
    import {TextField, type TextOptions} from "../../Fields/Text";

    export let field: TextField<TextOptions>;
</script>

<TextInput
    labelText="{field.label}"
    helperText="{field.options.help}"
    placeholder="{field.options?.placeholder || ''}"
    maxCount={field.options.maxLength}
/>
