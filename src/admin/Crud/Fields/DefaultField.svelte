<script lang="ts">
    import type {Field} from "../../Fields/Field";
    import {TextInput} from "carbon-components-svelte";
    import type {Options} from "../../Fields/Options";

    export let field: Field<Options>;
</script>

<TextInput labelText="{field.label}" placeholder="{field.options?.placeholder || ''}" />
