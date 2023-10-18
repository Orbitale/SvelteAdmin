<script lang="ts">
	import {
		type Headers,
		type Header,
		createEmptyRow,
		type Rows
	} from '$lib/admin/DataTable/DataTable.ts';
	import type { Options } from '$lib/admin/FieldDefinitions/Options.ts';
	import type { KeyValueObject } from '$lib/admin/genericTypes.ts';
	import type { Field } from '$lib/admin/FieldDefinitions/Field.ts';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';

	import { type CrudOperation, List } from '$lib/admin/Crud/Operations.ts';

	import type { Action } from '$lib/admin/actions.ts';
	import DataTable from '$lib/admin/DataTable/DataTable.svelte';

	import { _ } from 'svelte-i18n';

	export let crud: CrudDefinition<unknown>;
	export let operation: CrudOperation<unknown>;
	export let requestParameters: KeyValueObject = {};

	const actions = operation.actions;
	const headers: Headers = operation.fields.map((field: Field<Options>): Header => {
		return { key: field.name, value: field.label };
	});

	if (!crud.options.stateProvider) {
		throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
	}

	const rows: Promise<unknown> = crud.options.stateProvider.provide(operation, requestParameters)
		.then((r: unknown) => {
			console.info(r);
			if (r && !Array.isArray(r)) {
				throw new Error(
					'CrudList expected state provider to return an array, current result is non-empty and not an array.'
				);
			}
			if (!r || !r?.length) {
				r = [createEmptyRow(operation)];
			}

			return r;
		});

	let globalActions: Array<Action> = [];
	if (operation instanceof List<unknown> || operation.options?.globalActions?.length) {
		globalActions = operation.options.globalActions;
	}
</script>

<DataTable {headers} {rows} {actions} {globalActions}>
	<h2 slot="title">
		{$_(operation.label, { values: { name: $_(crud.options.label.plural) } })}
	</h2>
</DataTable>
