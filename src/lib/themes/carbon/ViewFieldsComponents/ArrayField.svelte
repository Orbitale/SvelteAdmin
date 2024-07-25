<script lang="ts">
	import { ArrayField } from '$lib/Fields/Array';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { FieldInterface } from '$lib/Fields';
	import type { FieldOptions } from '$lib/Fields';
	import type { ThemeConfig } from '$lib/types';
	import CrudViewField from '$lib/themes/carbon/Crud/CrudViewField.svelte';

	export let field: ArrayField<FieldInterface<FieldOptions>>;
	export let value: Array<unknown> | undefined;
	export let operation: CrudOperation;
	export let entityObject: Record<string, unknown> = {};
	export let theme: ThemeConfig;

	if (!value) {
		value = [];
	}
</script>

{#each value || [] as itemValue}
	<div>
		<CrudViewField {operation} field={field.innerField} {entityObject} {theme} value={itemValue} />
	</div>
{/each}
