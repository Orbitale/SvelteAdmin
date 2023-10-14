<script lang="ts">
	import { Grid, Row } from 'carbon-components-svelte';

	import SingleAction from './SingleAction.svelte';
	import type { Action } from '../../actions';

	export let actions: Action[] = [];
	export let item: object|undefined = undefined;
</script>

<Grid style="max-width: 14rem;">
	<Row>
		{#each actions as action}
			<SingleAction {action} {item} />
		{/each}
	</Row>
</Grid>
