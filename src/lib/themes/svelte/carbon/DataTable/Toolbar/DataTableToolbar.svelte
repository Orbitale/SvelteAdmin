<script lang="ts">
	import type { Snippet } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarContent from 'carbon-components-svelte/src/DataTable/ToolbarContent.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import FilterIcon from 'carbon-icons-svelte/lib/Filter.svelte';
	import FilterReset from 'carbon-icons-svelte/lib/FilterReset.svelte';

	import type { Action } from '$lib/Actions';
	import ToolbarAction from '$lib/themes/svelte/carbon/DataTable/Toolbar/ToolbarAction.svelte';
	import FilterComponent from '$lib/themes/svelte/carbon/DataTable/Toolbar/ToolbarFilter.svelte';
	import type { Filter, FilterOptions } from '$lib/Filter';
	import type { ThemeConfig } from '$lib/types';
	import { getSubmittedFormData, type SubmittedData } from '$lib/Crud/Form';

	let {
		actions = [],
		filters = [],
		filtersValues = $bindable({}),
		onFiltersSubmit = () => {},
		theme,
		children
	}: {
		actions?: Array<Action>;
		filters?: Array<Filter<FilterOptions>>;
		filtersValues?: { [key: string]: string | Array<string> | undefined };
		onFiltersSubmit?: (data: SubmittedData) => void;
		theme: ThemeConfig;
		children?: Snippet;
	} = $props();

	filters.forEach((filter: Filter<FilterOptions>) => {
		filtersValues[filter.field] ??= undefined;
	});

	function submitFilters(e: SubmitEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (!e.target) {
			throw new Error(
				'No target when submitted filters. Did you forget to attach the event to a Form?'
			);
		}
		const data = getSubmittedFormData(e);
		// Remove empty values from data
		Object.keys(data).forEach((key: string) => {
			if (data[key] === '') {
				delete data[key];
			}
		});
		onFiltersSubmit(data);
	}

	function resetFilters() {
		filtersValues = {};
		filters.forEach((filter: Filter<FilterOptions>) => {
			filtersValues[filter.field] = undefined;
		});
		onFiltersSubmit({});
	}
</script>

{#if actions.length}
	<Toolbar>
		<ToolbarContent>
			{#each actions as action}
				<ToolbarAction {action} />
			{/each}
		</ToolbarContent>
	</Toolbar>
{/if}

{#if filters.length}
	<Accordion>
		<AccordionItem open={Object.values(filtersValues).filter((i) => !!i).length > 0}>
			{#snippet title()}
				{#if children}
					{@render children()}
				{:else}
					<FilterIcon />
					{$_('datatable.filters.menu_title')}
				{/if}
			{/snippet}

			<Form on:submit={submitFilters}>

				{#each filters as filter}
					<br />
					<FilterComponent {filter} {theme} value={filtersValues[filter.field]} />
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
