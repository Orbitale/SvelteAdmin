<script lang="ts">
	import { type Headers, type Header, createEmptyRow } from '$lib/admin/DataTable/DataTable.ts';
	import type { Options } from '$lib/admin/FieldDefinitions/Options.ts';
	import type { KeyValueObject } from '$lib/admin/generic_types.ts';
	import type { Field } from '$lib/admin/FieldDefinitions/Field.ts';
	import type { CrudDefinition } from '$lib/admin/Crud/definition.ts';

	import type { CrudAction } from '$lib/admin/Crud/actions.ts';

	import DataTable from '$lib/admin/DataTable/DataTable.svelte';
	import { _ } from 'svelte-i18n';

	export let crud: CrudDefinition;
	export let action: CrudAction;
	export let requestParameters: KeyValueObject = {};

	const actions = action.actions;
	const headers: Headers = action.fields.map((field: Field<Options>): Header => {
		return { key: field.name, value: field.label };
	});

	if (!crud.options.stateProvider) {
		throw new Error(`No StateProvider was given to the "${crud.name}" CRUD.`);
	}

	let rows = crud.options.stateProvider.provide(action, requestParameters);
	if (rows && !Array.isArray(rows)) {
		throw new Error(
			'CrudList expected state provider to return an array, current result is non-empty and not an array.'
		);
	}
	if (!rows || !rows.length) {
		rows = [createEmptyRow(action)];
	}
</script>

<h2>{$_(action.label, { values: { name: $_(crud.options.label.plural) } })}</h2>

<DataTable {headers} {rows} {actions} />
