<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	import SingleAction from '$lib/themes/svelte/carbon/DataTable/actions/SingleAction.svelte';
	import type { Action } from '$lib/Actions';

	export let actions: Action[] = [];
	export let item: object | undefined = undefined;
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
