<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';

	import SingleAction from './SingleAction.svelte';
	import type { Action } from '../../actions';

	export let actions: Action[] = [];
	export let item: object | undefined = undefined;
</script>

<Grid style="max-width: 14rem;">
	<Row>
		{#each actions as action}
			<SingleAction {action} {item} />
		{/each}
	</Row>
</Grid>
