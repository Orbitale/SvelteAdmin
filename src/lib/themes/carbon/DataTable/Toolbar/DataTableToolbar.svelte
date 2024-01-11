<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarContent from 'carbon-components-svelte/src/DataTable/ToolbarContent.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import FilterIcon from 'carbon-icons-svelte/lib/Filter.svelte';
	import FilterReset from 'carbon-icons-svelte/lib/FilterReset.svelte';

	import type { Action } from '$lib/actions';
	import ActionComponent from '$lib/themes/carbon/DataTable/Toolbar/ToolbarAction.svelte';
	import FilterComponent from '$lib/themes/carbon/DataTable/Toolbar/ToolbarFilter.svelte';
	import type { Filter, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';
	import { getSubmittedFormData } from '$lib';

	export let actions: Array<Action> = [];
	export let filters: Array<Filter<FilterOptions>> = [];
	export let theme: ThemeConfig;

	let filtersValues: Record<string, unknown> = {};
	const dispatchEvent = createEventDispatcher<SubmitEvent>();

	filters.forEach((filter: Filter) => {
		filtersValues[filter.field] = undefined;
	});

	function onFiltersSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!event.target) {
			throw new Error(
				'No target when submitted filters. Did you forget to attach the event to a Form?'
			);
		}
		const data = getSubmittedFormData(event);
		console.info('filtersValues', data);
		dispatchEvent('submitFilters', data);
	}

	function resetFilters() {
		filtersValues = {};
		filters.forEach((filter: Filter) => {
			filtersValues[filter.field] = undefined;
		});
		dispatchEvent('submitFilters', {});
	}
</script>

{#if actions.length}
	<Toolbar>
		<ToolbarContent>
			{#each actions as action}
				<ActionComponent {action} />
			{/each}
		</ToolbarContent>
	</Toolbar>
{/if}

{#if filters.length}
	<Accordion>
		<AccordionItem>
			<slot slot="title">
				<FilterIcon />
				{$_('datatable.filters.menu_title')}
			</slot>
			<Form action="#!" on:submit={onFiltersSubmit}>
				{#each filters as filter}
					<br />
					<FilterComponent {filter} {theme} bind:value={filtersValues[filter.field]} />
				{/each}
				<br />
				<Button type="submit" kind="secondary" size="field">
					<FilterIcon />
					{$_('datatable.filters.submit_filters')}
				</Button>
				<Button type="reset" kind="ghost" size="field" on:click={resetFilters}>
					<FilterReset />
					{$_('datatable.filters.reset_filters')}
				</Button>
			</Form>
		</AccordionItem>
	</Accordion>
{/if}
