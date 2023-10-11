<script lang="ts">
	import Dashboard from '@orbitale/svelte-admin';
	import { page } from '$app/stores';
	import { dashboard } from '$lib/admin/Dashboard.ts';

	let crud: string = $page.params.crud;
	let action: string = $page.params.action;
	let requestParameters = { ...$page.url.searchParams, ...$page.params };
</script>

<Dashboard {dashboard} {crud} {action} {requestParameters} />
