<script lang="ts">
	import Dashboard from '$lib/admin/Dashboard/Dashboard.svelte';
	import { page } from '$app/stores';
	import { browser } from "$app/environment";
	import { dashboard } from '../../../../testApp/Dashboard.ts';
	import { getRequestParams } from '$lib/admin/request.ts';

	$: crud = $page.params.crud;
	$: action = $page.params.action;
	$: requestParameters = getRequestParams($page, browser);
</script>

{#key $page}
	<Dashboard {dashboard} {crud} {action} {requestParameters} />
{/key}
