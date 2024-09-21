import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import {
	CallbackStateProcessor,
	CallbackStateProvider,
	ArrayField,
	CrudDefinition,
	DashboardDefinition,
	initLocale,
	TextField,
	View
} from '$lib';
import ComponentToTest from './ArrayField.svelte';
import carbon from '$lib/themes/svelte/carbon';

describe(
	'ArrayField component',
	() => {
		it('can be instantiated', async () => {
			const props = mockComponentProps(
				new ArrayField('array', 'Array label', new TextField('text', 'Text field'))
			);

			const rendered = render(ComponentToTest, props);

			const label = rendered.container.querySelector('div > strong');
			expect(label).toBeDefined();
			expect(label?.innerHTML).toStrictEqual('Text field');
			const valueElement = label?.parentElement?.nextElementSibling;
			expect(valueElement).toBeDefined();
			expect(valueElement?.childNodes).toBeDefined();
			expect(valueElement?.childNodes[0]).toBeInstanceOf(Text);
			const textNode: Text = valueElement?.childNodes[0] as Text;
			expect(textNode.wholeText).toStrictEqual('default_value');
		});
	},
	testOptions
);

function mockComponentProps(field: ArrayField<TextField>) {
	const dashboard = new DashboardDefinition({
		theme: carbon,
		adminConfig: {},
		cruds: [
			new CrudDefinition<string>({
				name: 'test_field',
				label: { singular: 'Test Field', plural: 'Test Fields' },
				operations: [new View([field])],
				stateProvider: new CallbackStateProvider<string>(() => Promise.resolve(null)),
				stateProcessor: new CallbackStateProcessor<string>(() => {})
			})
		]
	});

	initLocale('fr');

	return {
		field: field,
		value: ['default_value'],
		operation: (dashboard.cruds[0] as CrudDefinition<string>).options.operations[0],
		entityObject: { test_field: ['default_value'] },
		theme: dashboard.theme
	};
}
