<script lang="ts">
	import { _ } from 'svelte-i18n';

	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

	import AdminLayout from '$lib/themes/svelte/carbon/Layout/AdminLayout.svelte';
	import type { DashboardDefinition } from '$lib/Dashboard';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { CrudDefinition } from '$lib/Crud';
	import type { RequestParameters } from '$lib/Request';

	import type { Snippet } from 'svelte';

	let {
		dashboard,
		crud = undefined,
		operation = undefined,
		requestParameters = {},
		children
	}: {
		dashboard: DashboardDefinition;
		crud?: string | undefined;
		operation?: string | undefined;
		requestParameters?: RequestParameters;
		children?: Snippet;
	} = $props();

	let currentCrud: CrudDefinition<unknown> | undefined = $state();
	let currentCrudOperation: CrudOperation | undefined = $state();

	dashboard.cruds
		.filter((dashboardCrud: CrudDefinition<unknown>) => crud === dashboardCrud.name)
		.forEach((resolved: CrudDefinition<unknown>) => (currentCrud = resolved));

	currentCrud?.options.operations
		.filter((crudOperation: CrudOperation) => operation === crudOperation.name)
		.forEach((resolved: CrudOperation) => (currentCrudOperation = resolved));

	const ThemeComponent =
		currentCrudOperation?.dashboard.theme.crudActions[currentCrudOperation?.displayComponentName];

	const sideMenu = dashboard.stores.sideMenu;
	const topLeftMenu = dashboard.stores.topLeftMenu;
	const topRightMenu = dashboard.stores.topRightMenu;
</script>

<AdminLayout
	adminConfig={dashboard.adminConfig}
	translations={dashboard.localeDictionaries}
	side_menu_links={$sideMenu}
	top_left_menu_links={$topLeftMenu}
	top_right_menu_links={$topRightMenu}
>
	{#if children}
		{@render children()}
	{:else}
		{#if !currentCrud}
			<InlineNotification hideCloseButton={true}>
				{#if crud}
					{$_('error.crud.could_not_find_crud_name', { values: { crud } })}
				{:else}
					{$_('error.crud.no_crud_specified')}
				{/if}
			</InlineNotification>
		{/if}
		{#if currentCrud && !currentCrudOperation}
			<InlineNotification hideCloseButton={true}>
				{#if operation}
					{$_('error.crud.could_not_find_operation_name', {
						values: { crud, operation }
					})}
				{:else}
					{$_('error.crud.no_operation_specified', { values: { crud } })}
				{/if}
			</InlineNotification>
		{/if}
		{#if currentCrud && currentCrudOperation && !ThemeComponent}
			<InlineNotification hideCloseButton={true}>
				{$_('error.crud.could_not_find_component', {
					values: { crud, operation }
				})}
			</InlineNotification>
		{/if}
		<ThemeComponent
			{dashboard}
			crud={currentCrud}
			operation={currentCrudOperation}
			{requestParameters}
		/>
	{/if}
</AdminLayout>
