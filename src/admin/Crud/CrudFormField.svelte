<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import type {Field} from "../Fields/Field";
    import type {Options} from "../Fields/Options";

    export let field: Field<Options>;

    const dispatchEvent = createEventDispatcher<{
        fieldChange: {
            key: string,
            value: any,
        },
    }>();

    function onFieldChange(e: InputEvent) {
        dispatchEvent('fieldChange', {
            key: field.name,
            value: e.detail,
        });
    }
</script>

<svelte:component
    this={field.formComponent}
    field={field}
    on:change={onFieldChange}
    on:blur
    on:check
    on:click
    on:focus
    on:input
    on:keydown
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    on:toggle
/>
