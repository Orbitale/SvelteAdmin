<script lang="ts">
	import Dashboard from '../../../../lib/themes/carbon/Dashboard/Dashboard.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { dashboard } from '../../../../testApp/Dashboard.js';
	import { getRequestParams } from '$lib/request.js';

	$: crud = $page.params.crud;
	$: operation = $page.params.operation;
	$: requestParameters = getRequestParams($page, browser);
</script>

{#key $page}
	<Dashboard {dashboard} {crud} {operation} {requestParameters} />
{/key}
