<script lang="ts">
    import {Toggle} from "carbon-components-svelte";
    import {ToggleField, type ToggleOptions} from "../../Fields/Toggle";
    import {createEventDispatcher} from "svelte";

    export let field: ToggleField<ToggleOptions>;
    const dispatchEvent = createEventDispatcher<{
        change: boolean,
    }>();

    let is_checked: boolean;

    function onChange() {
        dispatchEvent('change', is_checked);
    }
</script>

<Toggle
    name="{field.name}"
    labelText="{field.label}"
    helperText="{field.options.help}"
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:change={onChange}
    on:keyup
    on:focus
    on:blur
    bind:toggled={is_checked}
/>
