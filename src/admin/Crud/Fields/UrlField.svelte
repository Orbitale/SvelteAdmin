<script lang="ts">
    import {TextInput} from "carbon-components-svelte";
    import {UrlField, type UrlOptions} from "../../Fields/Url";

    // Maximum length of an URL in Chrome (and IE…), it is the lowest possible value among all browsers,
    // therefore used as "standard" here.
    const maxCount = 2083;

    export let field: UrlField<UrlOptions>;
</script>

<TextInput
    labelText="{field.label}"
    helperText="{field.options.help}"
    placeholder="{field.options?.placeholder || ''}"
    maxCount={maxCount}
/>
