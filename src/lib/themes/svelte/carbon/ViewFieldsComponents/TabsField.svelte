<script lang="ts">
	import Tabs from '../Tabs/Tabs.svelte';
	import type { Tabs as TabsField } from '$lib/Fields/Tabs';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ThemeConfig } from '$lib/types';

	let {
		field,
		operation,
		entityObject = {},
		value,
		theme
	}: {
		field: TabsField;
		operation: CrudOperation;
		entityObject?: Record<string, unknown>;
		value: unknown;
		theme: ThemeConfig;
	} = $props();
</script>

<Tabs FieldComponent={theme.viewField} {field} {operation} {entityObject} {value} {theme} />
