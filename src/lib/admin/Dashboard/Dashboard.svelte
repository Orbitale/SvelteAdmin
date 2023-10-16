<svelte:options
	customElement={{
		tag: 'sa-dashboard',
		props: {
			dashboard: { reflect: false, type: 'Object' },
			crud: { reflect: true, type: 'String' },
			action: { reflect: true, type: 'String' }
		}
	}}
/>

<script lang="ts">
	import { _ } from 'svelte-i18n';

	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

	import AdminLayout from '$lib/admin/Layout/AdminLayout.svelte';
	import type { DashboardDefinition } from '$lib/admin/Dashboard/definition.ts';
	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';
	import type { KeyValueObject } from '$lib/admin/genericTypes.ts';

	export let dashboard: DashboardDefinition;
	export let crud: string | undefined = undefined;
	export let operation: string | undefined = undefined;
	export let requestParameters: KeyValueObject = {};

	let currentCrud: CrudDefinition | undefined;
	let currentCrudOperation: CrudOperation | undefined;

	dashboard.cruds
		.filter((dashboardCrud: CrudDefinition) => crud === dashboardCrud.name)
		.forEach((resolved: CrudDefinition) => (currentCrud = resolved));

	currentCrud?.options.operations
		.filter((crudOperation: CrudOperation) => operation === crudOperation.name)
		.forEach((resolved: CrudOperation) => (currentCrudOperation = resolved));
</script>

<AdminLayout
	adminConfig={dashboard.adminConfig}
	translations={dashboard.localeDictionaries}
	side_menu_links={dashboard.sideMenu}
	top_left_menu_links={dashboard.topLeftMenu}
	top_right_menu_links={dashboard.topRightMenu}
>
	<slot>
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
		<svelte:component
			this={currentCrudOperation?.displayComponent}
			{dashboard}
			crud={currentCrud}
			operation={currentCrudOperation}
			{requestParameters}
		/>
	</slot>
</AdminLayout>
