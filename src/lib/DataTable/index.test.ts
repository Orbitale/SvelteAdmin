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

		it('can create an empty row from CrudOperation with all fields', () => {
			const fields = [
				new CheckboxField('field_1'),
				new Field('field_2'),
				new NumberField('field_3'),
				new Tabs('field_4'),
				new TextareaField('field_5'),
				new TextField('field_6'),
				new ToggleField('field_7'),
				new UrlField('field_8')
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
				field_7: '-',
				field_8: '-'
			});
		});
	},
	testOpts
);
