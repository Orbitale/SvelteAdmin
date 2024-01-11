<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	import type { FieldInterface } from '$lib/FieldDefinitions/Field';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import DefaultField from '$lib/themes/carbon/ViewFieldsComponents/DefaultField.svelte';
	import type { ThemeConfig } from '$lib/themes/ThemeConfig';

	export let operation: CrudOperation;
	export let field: FieldInterface<Options>;
	export let entityObject: Record<string, unknown> = {};
	export let value: unknown;
	export let theme: ThemeConfig;

	const viewComponent = theme?.viewFields[field.viewComponent] ?? DefaultField;

	if (value === undefined && entityObject) {
		value = entityObject[field.name];
	}

	const fullSize = !(field.label || field.name);
</script>

{#if fullSize}
	<svelte:component this={viewComponent} {field} {operation} {theme} {entityObject} {value} />
{:else}
	<Grid>
		<Row padding noGutterLeft noGutterRight narrow condensed>
			<Column sm={2} md={3} lg={4}>
				<svelte:component this={theme?.viewFields?.label} {field} />
			</Column>
			<Column sm={2} md={5} lg={12}>
				<svelte:component this={viewComponent} {field} {operation} {theme} {entityObject} {value} />
			</Column>
		</Row>
	</Grid>
{/if}
