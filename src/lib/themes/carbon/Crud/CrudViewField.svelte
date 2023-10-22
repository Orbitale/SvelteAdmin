<script lang="ts">
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';

	import type { FieldInterface } from '$lib/FieldDefinitions/Field.ts';
	import type { Options } from '$lib/FieldDefinitions/Options.ts';
	import type { CrudOperation } from '$lib/Crud/Operations.ts';
	import ViewLabel from '$lib/themes/carbon/ViewFieldsComponents/ViewLabel.svelte';

	export let operation: CrudOperation<object>;
	export let field: FieldInterface<Options>;
	export let data: Record<string, unknown> = {};
	export let value: unknown;

	if (value === undefined && data) {
		value = data[field.name];
	}
</script>

<Grid>
	<Row padding noGutterLeft noGutterRight narrow condensed>
		<Column sm={2} md={3} lg={4}>
			<ViewLabel {field} />
		</Column>
		<Column sm={2} md={5} lg={12}>
			<svelte:component this={field.viewComponent} {field} {operation} {value} {data} on:click />
		</Column>
	</Row>
</Grid>
