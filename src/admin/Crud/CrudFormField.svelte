<script lang="ts">
    import type {Field} from "../Fields/Field";
    import type {Options} from "../Fields/Options";

    export let field: Field<Options>;
</script>

<svelte:component this={field.formComponent} field={field} />
