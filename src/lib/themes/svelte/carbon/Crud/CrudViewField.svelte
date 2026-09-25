<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields/index.js';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { ThemeConfig } from '$lib/types.js';

	import DefaultField from '$lib/themes/svelte/carbon/ViewFieldsComponents/DefaultField.svelte';

	let {
		operation,
		field,
		entityObject = {},
		value = $bindable(),
		theme
	}: {
		operation: CrudOperation;
		field: FieldInterface<CommonFieldOptions>;
		entityObject?: Record<string, unknown>;
		value: unknown;
		theme: ThemeConfig;
	} = $props();

	const ViewComponent = $derived(theme?.viewFields[field.viewComponent] ?? DefaultField);
	const ViewLabelComponent = $derived(theme?.viewFields?.label);
	let internalValue = $derived.by(() => {
		if (value === undefined && entityObject) {
			return entityObject[field.name];
		}
		return value;
	});

	const fullSize = $derived(!(field.label || field.name));
</script>

{#if fullSize}
	<ViewComponent {field} {operation} {theme} {entityObject} value={internalValue} />
{:else}
	<Grid>
		<Row padding noGutterLeft noGutterRight narrow condensed>
			<Column sm={2} md={3} lg={4}>
				<ViewLabelComponent {field} />
			</Column>
			<Column sm={2} md={5} lg={12}>
				<ViewComponent {field} {operation} {theme} {entityObject} value={internalValue} />
			</Column>
		</Row>
	</Grid>
{/if}
