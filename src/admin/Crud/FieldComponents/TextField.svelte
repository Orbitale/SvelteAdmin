<script lang="ts">
    import {TextInput} from "carbon-components-svelte";
    import {TextField, type TextOptions} from "../../FieldDefinitions/Text";

    export let field: TextField<TextOptions>;
</script>

<TextInput
    name="{field.name}"
    labelText="{field.label}"
    helperText="{field.options.help}"
    placeholder="{field.options?.placeholder || ''}"
    maxCount={field.options.maxLength}
    on:change
    on:input
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:paste
/>
