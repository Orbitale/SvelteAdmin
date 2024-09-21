<script lang="ts">
	import { _ } from 'svelte-i18n';
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';

	import type { DateRangeFilter } from '$lib/Filter';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: DateRangeFilter;
	export let value: undefined|string|Array<string>;

	let from: string = ''  ;
	let to: string = ''  ;

	// Extracted from Carbon's DatePicker types
	type ChangeEvent = string | {
		selectedDates: [dateFrom: Date, dateTo?: Date | undefined];
		dateStr: string | { from: string; to: string; };
	};
</script>

<FilterContainer {filter}>
	<DatePicker datePickerType="range" bind:valueFrom={from} bind:valueTo={to}>
		<DatePickerInput labelText={$_('filters.date.from')} name={filter.field + '[0]'} value={from || ''} />
		<DatePickerInput labelText={$_('filters.date.to')} name={filter.field + '[1]'} value={to || ''} />
	</DatePicker>
</FilterContainer>
