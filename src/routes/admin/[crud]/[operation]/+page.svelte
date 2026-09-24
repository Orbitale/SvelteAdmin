<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';

	import { dashboard } from '../../../../testApp/Dashboard.js';
	import { getRequestParams } from '$lib/index.js';

	let crud = $derived(page.params.crud);
	let operation = $derived(page.params.operation);
	let requestParameters = $derived(getRequestParams(page, browser));
	let DashboardComponent = $derived(dashboard.theme.dashboard);
</script>

{#key page}
	<DashboardComponent
		{dashboard}
		{crud}
		{operation}
		{requestParameters}
	/>
{/key}
