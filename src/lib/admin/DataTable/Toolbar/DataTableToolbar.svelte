<script lang="ts">
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarContent from 'carbon-components-svelte/src/DataTable/ToolbarContent.svelte';

	import type { Action } from '$lib/admin/actions.ts';
	import ToolbarAction from '$lib/admin/DataTable/Toolbar/ToolbarAction.svelte';

	export let actions: Array<Action> = [];
</script>

<Toolbar>
	<ToolbarContent>
		<!--        <ToolbarMenu>-->
		<!--            <ToolbarMenuItem primaryFocus>Restart all</ToolbarMenuItem>-->
		<!--            <ToolbarMenuItem href="#">-->
		<!--                API documentation-->
		<!--            </ToolbarMenuItem>-->
		<!--            <ToolbarMenuItem hasDivider danger>Stop all</ToolbarMenuItem>-->
		<!--        </ToolbarMenu>-->

		{#each actions as action}
			<ToolbarAction {action} />
		{/each}
	</ToolbarContent>
</Toolbar>
