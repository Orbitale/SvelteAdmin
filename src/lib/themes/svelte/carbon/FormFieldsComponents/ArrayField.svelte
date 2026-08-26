<script lang="ts">
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import { _ } from 'svelte-i18n';

	import CrudFormField from '$lib/themes/svelte/carbon/Crud/CrudFormField.svelte';
	import { ArrayField } from '$lib/Fields/Array';
	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { FieldInterface } from '$lib/Fields';
	import type { FieldOptions } from '$lib/Fields';
	import type { ThemeConfig } from '$lib/types';

	let {
		field,
		operation,
		entityObject = {},
		value,
		theme
	}: {
		field: ArrayField<FieldInterface<FieldOptions>>;
		operation: CrudOperation;
		entityObject?: Record<string, unknown>;
		value: unknown[];
		theme: ThemeConfig;
	} = $props();
</script>

<Grid fullWidth>
	<Row>
		<Column>
			{$_(field.label)}
		</Column>
	</Row>
	<Row>
		<Column>
			<Grid>
				{#each value || [] as itemValue}
					<Row>
						<Column>
							<CrudFormField
								{operation}
								field={field.innerField}
								{entityObject}
								{theme}
								value={itemValue}
							/>
						</Column>
					</Row>
				{:else}
					<Row>
						<Column>
							<CrudFormField
								{operation}
								field={field.innerField}
								{entityObject}
								{theme}
								value={null}
							/>
						</Column>
					</Row>
				{/each}
			</Grid>
		</Column>
	</Row>
</Grid>
