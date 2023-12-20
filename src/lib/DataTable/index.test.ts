import { describe, it, expect, type TestOptions } from 'vitest';
import { createEmptyRow } from '$lib/DataTable/DataTable';
import {
	List,
	CheckboxField,
	Field,
	NumberField,
	Tabs,
	TextareaField,
	TextField,
	ToggleField,
	UrlField
} from '$lib';
import { Columns } from '$lib/FieldDefinitions/Columns';

const testOpts: TestOptions = {
	repeats: process.env.REPEAT ? parseInt(process.env.REPEAT) : undefined
};

describe(
	'DataTable',
	() => {
		it('can create an empty row from empty CrudOperation', () => {
			const row = createEmptyRow(new List([]));

			expect(row).toBeDefined();
			expect(row).toStrictEqual({
				id: 0
			});
		});

		it('can create an empty row from CrudOperation with many text-based fields', () => {
			const fields = [
				new CheckboxField('field_1'),
				new Field('field_2'),
				new NumberField('field_3'),
				new TextareaField('field_4'),
				new TextField('field_5'),
				new ToggleField('field_6'),
				new UrlField('field_7')
			];
			const row = createEmptyRow(new List(fields));

			expect(row).toBeDefined();
			expect(row).toStrictEqual({
				id: 0,
				field_1: '-',
				field_2: '-',
				field_3: '-',
				field_4: '-',
				field_5: '-',
				field_6: '-',
				field_7: '-'
			});
		});

		it('can create a Tabs configuration with 1 level of nested fields', () => {
			const fields = [
				new Tabs([
					{ name: 'tab_1', fields: [new CheckboxField('field_1')] },
					{ name: 'tab_2', fields: [new Field('field_2')] },
					{ name: 'tab_3', fields: [new NumberField('field_3')] },
					{ name: 'tab_4', fields: [new TextareaField('field_4')] },
					{ name: 'tab_5', fields: [new TextField('field_5')] },
					{ name: 'tab_6', fields: [new ToggleField('field_6')] },
					{ name: 'tab_7', fields: [new UrlField('field_7')] }
				])
			];
			const list = new List(fields);

			expect(list).toBeDefined();
		});

		it('can create a Columns configuration with 1 level of nested fields', () => {
			const fields = [
				new Columns([
					{ name: 'column_1', fields: [new CheckboxField('field_1')] },
					{ name: 'column_2', fields: [new Field('field_2')] },
					{ name: 'column_3', fields: [new NumberField('field_3')] },
					{ name: 'column_4', fields: [new TextareaField('field_4')] },
					{ name: 'column_5', fields: [new TextField('field_5')] },
					{ name: 'column_6', fields: [new ToggleField('field_6')] },
					{ name: 'column_7', fields: [new UrlField('field_7')] }
				])
			];
			const list = new List(fields);

			expect(list).toBeDefined();
		});
	},
	testOpts
);
