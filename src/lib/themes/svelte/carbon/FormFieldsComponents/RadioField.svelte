<script lang="ts">
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import type { RadioField } from '$lib/Fields/Radio';

	export let field: RadioField;
	export let value: string | number | undefined;
</script>

<RadioButtonGroup
	name={field.name}
	legendText={field.label}
	disabled={field.options.disabled}
	selected={value}
>
	{#each field.options.choices as choice (choice.value)}
		<RadioButton
			labelText={choice.label}
			value={choice.value}
			disabled={choice.disabled ?? false}
		/>
	{/each}
</RadioButtonGroup>
{#if field.options.help}
	<div
		class:bx--form__helper-text={true}
		class:bx--form__helper-text--disabled={field.options.disabled ?? false}
	>
		{field.options.help}
	</div>
{/if}
