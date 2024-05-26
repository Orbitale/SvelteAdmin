<script lang="ts">
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	export let value: number | bigint | string | unknown;

	if (typeof value === 'bigint') {
		value = value.toString().replace(/n$/gi, '');
	}
</script>

{#if value !== undefined && isNaN(value)}
	<Tag type="red">NaN</Tag>
{:else if value !== 0 && !value}
	<Tag type="red">No value</Tag>
{:else}
	<Tag type="cool-gray">{value}</Tag>
{/if}
