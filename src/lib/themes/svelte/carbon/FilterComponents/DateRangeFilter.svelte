<script lang="ts">
	import { _ } from 'svelte-i18n';
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';

	import type { DateRangeFilter } from '$lib/Filter.js';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	let {
		filter,
		value
	}: {
		filter: DateRangeFilter;
		value: undefined | string | [string, string];
	} = $props();

	let from: string = $derived.by(() => {
		return value && Array.isArray(value) && value[0] ? value[0] : '';
	});
	let to: string = $derived.by(() => {
		return value && Array.isArray(value) && value[1] ? value[1] : '';
	});
</script>

<FilterContainer {filter}>
	<DatePicker datePickerType="range" bind:valueFrom={from} bind:valueTo={to}>
		<DatePickerInput labelText={$_('filters.date.from')} name={filter.field} value={from || ''} />
		<DatePickerInput labelText={$_('filters.date.to')} name={filter.field} value={to || ''} />
	</DatePicker>
</FilterContainer>
