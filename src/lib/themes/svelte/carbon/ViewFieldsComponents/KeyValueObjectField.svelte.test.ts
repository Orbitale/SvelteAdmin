import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ComponentToTest from './KeyValueObjectField.svelte';
import { KeyValueObjectField } from '$lib';

describe(
	'KeyValueObjectField component',
	() => {
		it('displays error with undefined', async () => {
			const rendered = render(ComponentToTest, {
				// @ts-ignore
				value: undefined,
				field: new KeyValueObjectField('', '', '', {})
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const child = element.querySelector('span');
			expect(child).toBeDefined();
			expect(child?.innerHTML.replace('<!---->', '')).toStrictEqual('No value');
		});

		it('displays error with empty object', async () => {
			const rendered = render(ComponentToTest, {
				value: {},
				field: new KeyValueObjectField('', '', '', {})
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const child = element.querySelector('span');
			expect(child).toBeDefined();
			expect(child?.innerHTML.replace('<!---->', '')).toStrictEqual('Not found');
		});

		it('displays value with object and single-depth property tree', async () => {
			const rendered = render(ComponentToTest, {
				value: { some_value: 'Found!' },
				field: new KeyValueObjectField('', '', 'some_value', {})
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const child = element.querySelector('span');
			expect(child).toBeDefined();
			expect(child?.innerHTML.replace('<!---->', '')).toStrictEqual('Found!');
		});

		it('displays value with object and more-depth property tree', async () => {
			const rendered = render(ComponentToTest, {
				value: { level1: { level2: { level3: { level4: 'Found!' } } } },
				field: new KeyValueObjectField('', '', 'level1.level2.level3.level4', {})
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const child = element.querySelector('span');
			expect(child).toBeDefined();
			expect(child?.innerHTML.replace('<!---->', '')).toStrictEqual('Found!');
		});
	}
);
