<script lang="ts">
	import { KeyValueObjectField } from '$lib/Fields/KeyValueObject';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	export let field: KeyValueObjectField;
	export let value: object;

	let displayValue: unknown = undefined;

	if (value) {
		displayValue = value;
		field.propertyPath.split('.').forEach((key) => (displayValue = displayValue[key] ?? undefined));
	}
</script>

{#if value === undefined}
	<Tag type="red">No value</Tag>
{:else if displayValue === undefined}
	<Tag type="red">Not found</Tag>
{:else}
	<Tag type="cool-gray">{displayValue}</Tag>
{/if}
