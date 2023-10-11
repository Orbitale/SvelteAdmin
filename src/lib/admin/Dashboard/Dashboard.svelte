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
	import { InlineNotification } from 'carbon-components-svelte';
	import AdminLayout from '../Layout/AdminLayout.svelte';
	import type { DashboardDefinition } from './definition.ts';
	import type { CrudAction } from '../Crud/actions.ts';
	import type { CrudDefinition } from '../Crud/definition.ts';
	import type { KeyValueObject } from '../generic_types.ts';

	export let dashboard: DashboardDefinition;
	export let crud: string | undefined;
	export let action: string | undefined;
	export let requestParameters: KeyValueObject = {};

	let currentCrud: CrudDefinition | undefined;
	let currentCrudAction: CrudAction | undefined;

	dashboard.cruds
		.filter((dashboardCrud: CrudDefinition) => crud === dashboardCrud.name)
		.forEach((resolved: CrudDefinition) => (currentCrud = resolved));

	currentCrud?.options.actions
		.filter((crudAction: CrudAction) => action === crudAction.name)
		.forEach((resolved: CrudAction) => (currentCrudAction = resolved));
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
					{$_('error.crud.could_not_find_crud_name', { values: { crud: crud } })}
				{:else}
					{$_('error.crud.no_crud_specified')}
				{/if}
			</InlineNotification>
		{/if}
		{#if currentCrud && !currentCrudAction}
			<InlineNotification hideCloseButton={true}>
				{#if action}
					{$_('error.crud.could_not_find_action_name', { values: { crud: crud, action: action } })}
				{:else}
					{$_('error.crud.no_action_specified', { values: { crud: crud } })}
				{/if}
			</InlineNotification>
		{/if}
		<svelte:component
			this={currentCrudAction?.displayComponent}
			{dashboard}
			crud={currentCrud}
			action={currentCrudAction}
			{requestParameters}
		></svelte:component>
	</slot>
</AdminLayout>
