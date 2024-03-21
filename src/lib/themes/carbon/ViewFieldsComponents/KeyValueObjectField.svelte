<script lang="ts">
	import { KeyValueObjectField } from '$lib/Fields/KeyValueObject';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	export let field: KeyValueObjectField;
	export let value: object;

	let displayValue: unknown = null;

	if (value) {
		field.propertyPath.split('.').forEach((key) => displayValue = value[key] ?? undefined);
	}
</script>

{#if displayValue === undefined}
	<Tag type="red">Not found</Tag>
{:else if displayValue === null}
	<Tag type="outline">null</Tag>
{:else}
	{displayValue}
{/if}
