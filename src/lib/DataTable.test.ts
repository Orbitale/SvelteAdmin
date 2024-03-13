import { describe, it, expect } from 'vitest';
import {
	List,
	CheckboxField,
	BaseField,
	NumberField,
	Tabs,
	TextareaField,
	TextField,
	ToggleField,
	UrlField
} from '$lib';
import { Columns } from '$lib/Fields/Columns';
import { testOptions } from '$lib/TestOptions';

describe(
	'DataTable',
	() => {
		it('can create a Tabs configuration with 1 level of nested fields', () => {
			const fields = [
				new Tabs('', '', [
					{ name: 'tab_1', fields: [new CheckboxField('field_1')] },
					{ name: 'tab_2', fields: [new BaseField('field_2')] },
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
				new Columns('', '', [
					{ name: 'column_1', fields: [new CheckboxField('field_1')] },
					{ name: 'column_2', fields: [new BaseField('field_2')] },
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
	testOptions
);
