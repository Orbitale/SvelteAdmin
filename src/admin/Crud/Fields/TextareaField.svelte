<script lang="ts">
    import {TextArea} from "carbon-components-svelte";
    import {TextareaField, type TextareaOptions} from "../../Fields/Textarea";

    export let field: TextareaField<TextareaOptions>;
</script>

<TextArea
    labelText="{field.label}"
    helperText="{field.options.help}"
    placeholder="{field.options.placeholder}"
    rows={field.options.rows}
/>
