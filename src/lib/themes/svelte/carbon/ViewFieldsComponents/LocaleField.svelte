<script lang="ts">
	import type { LocaleField } from '$lib/Fields/Locale';

	export let field: LocaleField;
	export let value: string | undefined;

	let names: Intl.DisplayNames | undefined;
	try {
		names = new Intl.DisplayNames(
			field.options.displayLocale ? [field.options.displayLocale] : undefined,
			{ type: 'language' }
		);
	} catch (e) {
		console.warn('Intl.DisplayNames unavailable for locales:', e);
	}

	$: label = value ? (names?.of(value) ?? value) : '';
</script>

{#if label}
	{label}
{:else}
	-
{/if}
