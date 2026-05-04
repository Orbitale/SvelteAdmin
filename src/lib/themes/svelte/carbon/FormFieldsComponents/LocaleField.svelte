<script lang="ts">
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import type { LocaleField } from '$lib/Fields/Locale';
	import { COMMON_LOCALES } from '$lib/Fields/internal/intlData';

	export let field: LocaleField;
	export let value: string | undefined;

	const displayLocale = field.options.displayLocale;
	const only = field.options.only;

	let names: Intl.DisplayNames | undefined;
	try {
		names = new Intl.DisplayNames(displayLocale ? [displayLocale] : undefined, {
			type: 'language'
		});
	} catch (e) {
		console.warn('Intl.DisplayNames unavailable for locales:', e);
	}

	$: codes = (only && only.length > 0 ? only : COMMON_LOCALES).slice().sort();

	function labelFor(code: string): string {
		return names?.of(code) ?? code;
	}
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
		<SelectItem value={code} text={labelFor(code)} />
	{/each}
</Select>
