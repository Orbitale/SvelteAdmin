<script lang="ts">
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';
	import CheckboxIndeterminate from 'carbon-icons-svelte/lib/CheckboxIndeterminate.svelte';
	import type { TextFilter } from '$lib/Filter';
	import FilterContainer from '$themes/carbon/FilterComponents/Internal/FilterContainer.svelte';

	export let filter: TextFilter;
	let value: boolean | null = null;

	const style = 'padding: 0.5rem;';

	function checkboxStyle(
		currentValue: boolean | null,
		expectedValue: boolean | null,
		activeColor: string
	): string {
		if (currentValue === expectedValue) {
			return `color: ${activeColor}; border-color: #aaa;`;
		}
		return `color: #aaa; border-color: ${activeColor};`;
	}

	function buttonStyle(
		currentValue: boolean | null,
		expectedValue: boolean | null,
		activeColor: string
	): string {
		if (currentValue === expectedValue) {
			return `${style};border-color: ${activeColor};`;
		}
		return `${style};border-color: transparent;`;
	}

	$: inputValue = value === true ? 1 : value === false ? 0 : '';
</script>

<input type="hidden" name={filter.field} value={inputValue} />

<FilterContainer {filter}>
	<RadioButtonGroup name={filter.field} labelPosition="right">
		<Button
			value={true}
			disabled={value === true}
			on:click={() => (value = true)}
			size="small"
			kind="tertiary"
			style={buttonStyle(value, true, '#0a0')}
		>
			<CheckboxChecked size={24} style={checkboxStyle(value, true, '#0a0')} />
		</Button>

		<Button
			value={false}
			disabled={value === false}
			on:click={() => (value = false)}
			size="small"
			kind="tertiary"
			style={buttonStyle(value, false, '#a00')}
		>
			<Close size={24} style={checkboxStyle(value, false, '#a00')} />
		</Button>

		<Button
			labelText="null"
			value={null}
			disabled={value === null}
			on:click={() => (value = null)}
			size="small"
			kind="tertiary"
			style={buttonStyle(value, null, '#333')}
		>
			<CheckboxIndeterminate size={24} style={checkboxStyle(value, null, '#333')} />
		</Button>
	</RadioButtonGroup>
</FilterContainer>
