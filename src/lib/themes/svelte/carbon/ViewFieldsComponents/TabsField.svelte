<script lang="ts">
	import Tabs from '../Tabs/Tabs.svelte';
	import type { Tabs as TabsField } from '$lib/Fields/Tabs';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { ThemeConfig } from '$lib/types';

	export let field: TabsField;
	export let operation: CrudOperation;
	export let entityObject: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;
</script>

<Tabs FieldComponent={theme.viewField} {field} {operation} {entityObject} {value} {theme} />
