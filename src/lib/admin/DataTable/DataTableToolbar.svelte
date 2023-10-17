<script lang="ts">
	import {
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarMenuItem,
		Button
	} from 'carbon-components-svelte';

	import type { Action } from '$lib/admin/actions.ts';
	import SingleAction from '$lib/admin/DataTable/actions/SingleAction.svelte';

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
			<SingleAction {action} />
		{/each}
	</ToolbarContent>
</Toolbar>
