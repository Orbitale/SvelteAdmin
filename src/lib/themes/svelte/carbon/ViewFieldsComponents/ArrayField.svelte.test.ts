import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { CallbackStateProcessor } from '$lib/StateProcessor.js';
import { CallbackStateProvider } from '$lib/StateProvider.js';
import { ArrayField } from '$lib/Fields/Array.js';
import { CrudDefinition } from '$lib/Crud/index.js';
import { DashboardDefinition } from '$lib/Dashboard.js';
import { initLocale } from '$lib/i18n.js';
import { TextField } from '$lib/Fields/Text.js';
import { View } from '$lib/Crud/Operations.js';
import ComponentToTest from './ArrayField.svelte';
import carbon from '$lib/themes/svelte/carbon/index.js';

describe('ArrayField component', () => {
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
		expect(valueElement?.textContent).toStrictEqual('default_value');
	});
});

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
