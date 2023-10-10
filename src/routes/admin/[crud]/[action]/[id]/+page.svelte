<script lang="ts">
	// src/routes/[crud]/[action]/+page.svelte
	import Dashboard from '$lib/admin/Dashboard/Dashboard.svelte';
	import { page } from '$app/stores';

	import { dashboard } from '../../../../../testApp/Dashboard.ts';

	let crud: string = $page.params.crud;
	let action: string = $page.params.action;
</script>

<Dashboard {dashboard} {crud} {action} />
