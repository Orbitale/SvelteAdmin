<script lang="ts">
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import type { ChoiceField } from '$lib/Fields/Choice';

	export let field: ChoiceField;
	export let value: string | number | undefined;
</script>

<Select
	name={field.name}
	labelText={field.label}
	helperText={field.options.help}
	disabled={field.options.disabled}
	required={field.options.required}
	selected={value}
>
	{#if field.options.placeholder}
		<SelectItem value="" text={field.options.placeholder} hidden />
	{/if}
	{#each field.options.choices as choice (choice.value)}
		<SelectItem value={choice.value} text={choice.label} disabled={choice.disabled} />
	{/each}
</Select>
