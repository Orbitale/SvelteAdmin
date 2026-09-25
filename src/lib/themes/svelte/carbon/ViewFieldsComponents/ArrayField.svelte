<script lang="ts">
	import { ArrayField } from '$lib/Fields/Array';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { FieldInterface } from '$lib/Fields/index.js';
	import type { FieldOptions } from '$lib/Fields/index.js';
	import type { ThemeConfig } from '$lib/types.js';
	import CrudViewField from '$lib/themes/svelte/carbon/Crud/CrudViewField.svelte';

	let {
		field,
		value = $bindable(),
		operation,
		entityObject = {},
		theme
	}: {
		field: ArrayField<FieldInterface<FieldOptions>>;
		value: Array<unknown> | undefined;
		operation: CrudOperation;
		entityObject?: Record<string, unknown>;
		theme: ThemeConfig;
	} = $props();

	if (!value) {
		value = [];
	}
</script>

{#each value || [] as itemValue, i (i)}
	<div>
		<CrudViewField {operation} field={field.innerField} {entityObject} {theme} value={itemValue} />
	</div>
{/each}
