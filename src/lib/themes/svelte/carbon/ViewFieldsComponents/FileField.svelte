<script lang="ts">
	import type { FileField } from '$lib/Fields/File';

	export let field: FileField;
	export let value: string | undefined;
</script>

{#if value && value.length > 0}
	<a href={value} target="_blank" rel="noopener">
		{field.options.downloadLabel ?? value}
	</a>
{:else}
	-
{/if}
