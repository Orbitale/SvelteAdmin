<script lang="ts">
	import { type Action } from '../../actions';
	import SingleAction from './SingleAction.svelte';
	import { Grid, Row } from 'carbon-components-svelte';

	export let actions: Action[] = [];
	export let item: any = undefined;
</script>

<Grid style="max-width: 14rem;">
	<Row>
		{#each actions as action}
			<SingleAction {action} {item} />
		{/each}
	</Row>
</Grid>
