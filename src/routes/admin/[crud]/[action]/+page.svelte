<script lang="ts">
	import Dashboard from '$lib/admin/Dashboard/Dashboard.svelte';
	import { page } from '$app/stores';
	import { browser } from "$app/environment";
	import { dashboard } from '../../../../testApp/Dashboard.ts';

	let crud: string = $page.params.crud;
	let action: string = $page.params.action;

	const searchParams = browser && $page.url.searchParams;

	let requestParameters = { ...searchParams, ...$page.params };
</script>

<Dashboard {dashboard} {crud} {action} {requestParameters} />
