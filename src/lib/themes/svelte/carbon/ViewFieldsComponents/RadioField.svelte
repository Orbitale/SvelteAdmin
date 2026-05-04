<script lang="ts">
	import type { RadioField } from '$lib/Fields/Radio';

	export let field: RadioField;
	export let value: string | number | boolean | undefined;

	$: match = field.options.choices.find((c) => String(c.value) === String(value));
</script>

{#if match}
	{match.label}
{:else if value !== undefined && value !== null && value !== ''}
	{value}
{:else}
	-
{/if}
