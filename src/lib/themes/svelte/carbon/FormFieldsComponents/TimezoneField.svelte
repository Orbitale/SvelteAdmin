<script lang="ts">
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import type { TimezoneField } from '$lib/Fields/Timezone';
	import { supportedTimezones } from '$lib/Fields/internal/intlData';

	export let field: TimezoneField;
	export let value: string | undefined;

	const only = field.options.only;

	$: codes = (only && only.length > 0 ? only : supportedTimezones()).slice().sort();
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
	{#each codes as code (code)}
		<SelectItem value={code} text={code} />
	{/each}
</Select>
