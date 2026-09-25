<script lang="ts">
	/* eslint svelte/no-navigation-without-resolve: "off" */

	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
	import { UrlField } from '$lib/Fields/Url.js';

	let {
		value,
		field
	}: {
		value: string | undefined;
		field: UrlField;
	} = $props();

	// URL will be validated if not empty
	let valid = $derived.by(() => {
		if (!value || value?.length <= 0) {
			return false;
		}

		try {
			new URL(value, getOrigin()); // Throws exception on invalid URLs
			return true;
		} catch (e) {
			console.warn('URL parsing error: ' + e);
			return false;
		}
	});

	function getOrigin() {
		const w = typeof window !== 'undefined' ? window : { location: { origin: null } };

		return (w || { location: { origin: null } })?.location?.origin ?? '';
	}

	const attrs = $derived.by(() => {
		if (field.options.openInNewTab) {
			return {
				target: '_blank',
				rel: 'noopener'
			};
		}

		return {};
	});
</script>

{#if valid}
	<a {...attrs} href={value}>
		{#if field.options.openInNewTab}
			<Launch size={16} />
		{/if}
		{value}
	</a>
{:else if value && value.length > 0}
	<Tag>Invalid URL!</Tag>
{:else}
	-
{/if}
