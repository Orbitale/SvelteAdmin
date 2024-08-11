<script lang="ts">
	import { _ } from 'svelte-i18n';
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';

	import type { DateFilter } from '$lib/Filter';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: DateFilter;

	let from: string = '';
	let to: string = '';
</script>

<FilterContainer {filter}>
	<input type="hidden" name={filter.field + '[0]'} value={from} />
	<input type="hidden" name={filter.field + '[1]'} value={to} />

	<DatePicker datePickerType="range" bind:valueFrom={from} bind:valueTo={to}>
		<DatePickerInput labelText={$_('filters.date.from')} placeholder="mm/dd/yyyy" />
		<DatePickerInput labelText={$_('filters.date.to')} placeholder="mm/dd/yyyy" />
	</DatePicker>
</FilterContainer>
