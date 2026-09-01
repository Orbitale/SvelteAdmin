<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';

	import { dashboard } from '../../../../testApp/Dashboard';
	import { getRequestParams } from '$lib';

	let crud = $derived(page.params.crud);
	let operation = $derived(page.params.operation);
	let requestParameters = $derived(getRequestParams(page, browser));
</script>

{#key page}
	<dashboard.theme.dashboard
		{dashboard}
		{crud}
		{operation}
		{requestParameters}
	/>
{/key}
