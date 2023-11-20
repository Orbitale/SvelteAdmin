<script lang="ts">
	import RadioButtonChecked from 'carbon-icons-svelte/lib/RadioButtonChecked.svelte';
	import RadioButton from 'carbon-icons-svelte/lib/RadioButton.svelte';
	import type { CheckboxField } from '$lib';

	export let field: CheckboxField;
	export let value: boolean | undefined;

	if (value === undefined) {
		value = false;
	}
</script>

{#if value}
	<RadioButtonChecked />
{:else}
	<RadioButton />
{/if}
