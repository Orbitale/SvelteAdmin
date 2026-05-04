<script lang="ts">
	import type { CountryField } from '$lib/Fields/Country';

	export let field: CountryField;
	export let value: string | undefined;

	let names: Intl.DisplayNames | undefined;
	try {
		names = new Intl.DisplayNames(
			field.options.displayLocale ? [field.options.displayLocale] : undefined,
			{ type: 'region' }
		);
	} catch (e) {
		console.warn('Intl.DisplayNames unavailable for countries:', e);
	}

	$: label = value ? (names?.of(value) ?? value) : '';
</script>

{#if label}
	{label}
{:else}
	-
{/if}
