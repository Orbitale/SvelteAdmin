<script lang="ts">
	import { KeyValueObjectField } from '$lib/Fields/KeyValueObject.js';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	let { field, value }: { field: KeyValueObjectField; value: object } = $props();

	let displayValue: unknown = $derived.by(() => {
		let internalValue = value;
		if (internalValue) {
			// @ts-expect-error internalValue is of type "any"
			field.propertyPath
				.split('.')
				.forEach((key) => (internalValue = internalValue[key] ?? undefined));
		}
		return internalValue;
	});
</script>

{#if value === undefined}
	<Tag type="red">No value</Tag>
{:else if displayValue === undefined}
	<Tag type="red">Not found</Tag>
{:else}
	<Tag type="cool-gray">{displayValue}</Tag>
{/if}
