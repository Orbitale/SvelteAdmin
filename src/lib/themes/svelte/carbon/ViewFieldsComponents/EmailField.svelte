<script lang="ts">
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	let { value }: { value: string | undefined; } = $props();
</script>

{#if value !== '' && value && value.length > 0}
	<Tag>{value}</Tag>
{:else}
	-
{/if}
