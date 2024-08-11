<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';

	import type { CrudDefinition } from '$lib/Crud';
	import type { DashboardDefinition } from '$lib/Dashboard';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields';
	import type { StateProviderResult } from '$lib/StateProvider';
	import type { RequestParameters } from '$lib/Request';

	export let dashboard: DashboardDefinition;
	export let operation: CrudOperation;
	export let crud: CrudDefinition<unknown>;
	export let requestParameters: RequestParameters = {};

	const CrudViewField = dashboard.theme.viewField;

	let fields: FieldInterface<CommonFieldOptions>[] = operation.fields;

	let providerResultPromise: StateProviderResult<unknown> = crud.options.stateProvider.provide(
		operation,
		requestParameters
	);

	onMount(async () => {
		const data = await providerResultPromise;
		if (!data) {
			providerResultPromise = crud.options.stateProvider.provide(operation, requestParameters);
		}
	});
</script>

<h2>{$_(operation.label, { values: { name: $_(crud.options.label.singular) } })}</h2>

{#await providerResultPromise}
	<SkeletonText />
	<SkeletonText heading={true} />
	<SkeletonText paragraph={true} lines={3} />
{:then entityObject}
	{#if !entityObject}
		<InlineNotification kind="error">
			{$_('error.crud.entity.not_found')}
		</InlineNotification>
	{:else}
		{#each fields as field}
			<CrudViewField
				{operation}
				{field}
				{entityObject}
				theme={dashboard.theme}
				value={entityObject[field.name]}
			/>
		{/each}
	{/if}
{/await}
