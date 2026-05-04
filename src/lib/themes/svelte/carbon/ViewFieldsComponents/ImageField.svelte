<script lang="ts">
	import type { ImageField } from '$lib/Fields/Image';

	export let field: ImageField;
	export let value: string | undefined;
</script>

{#if value && value.length > 0}
	<img
		src={value}
		alt={field.options.alt ?? field.label}
		width={field.options.width}
		height={field.options.height}
		style="max-width: 240px; max-height: 240px; object-fit: contain;"
	/>
{:else}
	-
{/if}
