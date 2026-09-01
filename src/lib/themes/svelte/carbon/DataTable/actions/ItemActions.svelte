<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	import SingleAction from '$lib/themes/svelte/carbon/DataTable/actions/SingleAction.svelte';
	import type { Action } from '$lib/Actions';

	let {
		actions = [],
		item = undefined,
	}: {
		actions?: Action[];
		item?: object | undefined;
	} = $props();
</script>

<Grid style="max-width: 14rem;">
	<Row>
		{#each actions as action}
			<Column>
				<SingleAction {action} {item} />
			</Column>
		{/each}
	</Row>
</Grid>
