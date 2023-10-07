<script lang="ts">
    import AdminLayout from "../Layout/AdminLayout.svelte";
    import type {DashboardDefinition} from "$lib/admin/Dashboard/definition.ts";

    export let dashboard: DashboardDefinition;
</script>

<AdminLayout
    locales={dashboard.options.locale}
>

</AdminLayout>
