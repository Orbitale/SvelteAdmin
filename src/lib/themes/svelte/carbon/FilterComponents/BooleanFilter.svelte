<script lang="ts">
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';
	import CheckboxIndeterminate from 'carbon-icons-svelte/lib/CheckboxIndeterminate.svelte';
	import type { TextFilter } from '$lib/Filter.js';
	import FilterContainer from '$lib/themes/svelte/carbon/FilterComponents/Internal/FilterContainer.svelte';

	let {
		filter
	}: {
		filter: TextFilter;
	} = $props();

	let value: boolean | null = $state(null);

	let inputValue = $derived(value === true ? 1 : value === false ? 0 : '');
	let stringValue = $derived(value === true ? 'true' : value === false ? 'false' : 'null');
</script>

<input type="hidden" name={filter.field} value={inputValue} />

<FilterContainer {filter}>
	<RadioButtonGroup name={filter.field} labelPosition="right" selected={stringValue}>
		<RadioButton
			value="true"
			class="sva--filter-boolean-radio-button"
			onclick={() => (value = true)}
			style="--sva-input-color: #0a0;"
		>
			{#snippet labelChildren()}
				<CheckboxChecked size={24} style="color: #0a0;" />
			{/snippet}
		</RadioButton>

		<RadioButton
			value="false"
			class="sva--filter-boolean-radio-button"
			onclick={() => (value = false)}
			style="--sva-input-color: #a00;"
		>
			{#snippet labelChildren()}
				<Close size={24} style="color: #a00;" />
			{/snippet}
		</RadioButton>

		<RadioButton
			value="null"
			class="sva--filter-boolean-radio-button"
			onclick={() => (value = null)}
			style="--sva-input-color: #333;"
		>
			{#snippet labelChildren()}
				<CheckboxIndeterminate size={24} style="color: #333;" />
			{/snippet}
		</RadioButton>
	</RadioButtonGroup>
</FilterContainer>

<style>
	:global(.sva--filter-boolean-radio-button .bx--radio-button__label) {
		align-items: center;
	}
	:global(.sva--filter-boolean-radio-button .bx--radio-button__appearance) {
		border-color: var(--sva-input-color);
	}
</style>
