<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import { dashboard } from '../../../../testApp/Dashboard';
	import { getRequestParams } from '$lib/request';

	$: crud = $page.params.crud;
	$: operation = $page.params.operation;
	$: requestParameters = getRequestParams($page, browser);
</script>

{#key $page}
	<svelte:component
		this={dashboard.adminConfig.theme.dashboard}
		{dashboard}
		{crud}
		{operation}
		{requestParameters}
	/>
{/key}
