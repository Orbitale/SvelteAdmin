<script lang="ts">
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';
	import Checkbox from 'carbon-icons-svelte/lib/Checkbox.svelte';
	import CheckboxIndeterminate from 'carbon-icons-svelte/lib/CheckboxIndeterminate.svelte';
	import type { TextFilter } from '$lib/Filter';
	import { _ } from 'svelte-i18n';

	export let filter: TextFilter;
	let value: boolean | null = null;

	$: inputValue = value === true ? 1 : value === false ? 0 : '';
</script>

<input type="hidden" name={filter.field} value={inputValue} />

<RadioButtonGroup
	name={filter.field}
	legendText={$_(filter.label ?? filter.field)}
	labelPosition="right"
>
	<Button
		value={true}
		disabled={value === true}
		on:click={() => (value = true)}
		size="small"
		kind="secondary"
	>
		<CheckboxChecked size={24} style="color: #0a0;text-align: center" />
	</Button>
	<Button
		value={false}
		disabled={value === false}
		on:click={() => (value = false)}
		size="small"
		kind="secondary"
	>
		<Checkbox size={24} style="color: #a00;" />
	</Button>
	<Button
		labelText="null"
		value={null}
		disabled={value === null}
		on:click={() => (value = null)}
		size="small"
		kind="secondary"
	>
		<CheckboxIndeterminate />
	</Button>
</RadioButtonGroup>
