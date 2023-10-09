<script lang="ts">
    // src/routes/[crud]/[action]/+page.svelte
    import Dashboard from "$lib/admin/Dashboard/Dashboard.svelte";
    import {dashboard} from '$lib/testApp/Dashboard.ts';
    import {page} from '$app/stores';

    let crud: string = $page.params.crud;
    let action: string = $page.params.action;
</script>

<Dashboard {dashboard} crud="{crud}" action="{action}" />
