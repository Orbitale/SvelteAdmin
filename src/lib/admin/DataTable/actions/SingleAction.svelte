<script lang="ts">
    import {_} from "svelte-i18n";
    import {ToastNotification} from "carbon-components-svelte";
    import {type Action, CallbackAction, UrlAction} from "../../actions";

    export let action: Action;
    export let item: any = undefined;
</script>

{#if action instanceof UrlAction}
    <a href={action.url(item)} class="btn btn-sm btn-primary">
        {$_(action.label)}
    </a>
{:else if action instanceof CallbackAction}
    <button on:click={async () => await action.call(item)} class="btn btn-sm btn-primary">
        {$_(action.label)}
    </button>
{:else}
    <ToastNotification
        title={$_('data_table.items.unsupported_action', {values: {action: action.label}})}
        hideCloseButton
    />
{/if}
