<script lang="ts">
    import {Checkbox} from "carbon-components-svelte";
    import {CheckboxField, type CheckboxOptions} from "../../FieldDefinitions/Checkbox";
    import {createEventDispatcher} from "svelte";

    export let field: CheckboxField<CheckboxOptions>;

    const dispatchEvent = createEventDispatcher<{
        change: boolean,
    }>();

    let is_checked: boolean;

    function onChange() {
        dispatchEvent('change', is_checked);
    }
</script>

<Checkbox
    name="{field.name}"
    labelText="{field.label}"
    on:check
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:change={onChange}
    on:blur
    bind:checked={is_checked}
/>
{#if field.options.help}
    <!-- TODO use HelperText component whenever it's released in Carbon's repository -->
    <div
        class:bx--form__helper-text="{true}"
        class:bx--form__helper-text--disabled="{field.options.disabled}"
    >
        {field.options.help}
    </div>
{/if}
