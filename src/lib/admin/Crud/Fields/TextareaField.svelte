<script lang="ts">
    import {TextArea} from "carbon-components-svelte";
    import {TextareaField, type TextareaOptions} from "../../Fields/Textarea";

    export let field: TextareaField<TextareaOptions>;
</script>

<TextArea
    name="{field.name}"
    labelText="{field.label}"
    helperText="{field.options.help}"
    placeholder="{field.options.placeholder}"
    rows={field.options.rows}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:change
    on:input
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:paste
/>
