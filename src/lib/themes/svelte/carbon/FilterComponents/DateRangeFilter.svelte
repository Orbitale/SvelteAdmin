<script lang="ts">
	import { _ } from 'svelte-i18n';
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';

	import type { DateRangeFilter } from '$lib/Filter';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: DateRangeFilter;
	export let value: undefined | string | Array<string>;

	let from: string = '';
	let to: string = '';

	if (value && Array.isArray(value)) {
		if (value[0]) {
			from = value[0];
		}
		if (value[1]) {
			to = value[1];
		}
	}
</script>

<FilterContainer {filter}>
	<DatePicker datePickerType="range" bind:valueFrom={from} bind:valueTo={to}>
		<DatePickerInput labelText={$_('filters.date.from')} name={filter.field} value={from || ''} />
		<DatePickerInput labelText={$_('filters.date.to')} name={filter.field} value={to || ''} />
	</DatePicker>
</FilterContainer>
