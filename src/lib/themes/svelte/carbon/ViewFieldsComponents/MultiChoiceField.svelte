<script lang="ts">
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import type { MultiChoiceField } from '$lib/Fields/MultiChoice';

	export let field: MultiChoiceField;
	export let value: Array<string | number | boolean> | string | undefined;

	function asArray(
		v: Array<string | number | boolean> | string | undefined
	): Array<string | number | boolean> {
		if (Array.isArray(v)) return v;
		if (typeof v === 'string' && v.length > 0) return v.split(',');
		return [];
	}

	$: items = asArray(value).map((v) => {
		const c = field.options.choices.find((x) => String(x.value) === String(v));
		return c ? c.label : String(v);
	});
</script>

{#if items.length > 0}
	{#each items as label (label)}
		<Tag>{label}</Tag>
	{/each}
{:else}
	-
{/if}
