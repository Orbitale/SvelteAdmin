import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import ComponentToTest from './DefaultField.svelte';
import { TextField } from '$lib';

describe(
	'DefaultField component',
	() => {
		it('can be instantiated with undefined', async () => {
			const rendered = render(ComponentToTest, {
				field: new TextField('default_field'),
				value: undefined
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const input = rendered.container.querySelector('input');
			expect(input).toBeDefined();
			expect(input?.value).toStrictEqual('');
		});

		it('can be instantiated empty string', async () => {
			const rendered = render(ComponentToTest, {
				field: new TextField('default_field'),
				value: ''
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const input = rendered.container.querySelector('input');
			expect(input).toBeDefined();
			expect(input?.value).toStrictEqual('');
		});

		it('can be instantiated specific value', async () => {
			const rendered = render(ComponentToTest, {
				field: new TextField('default_field'),
				value: 'Some value'
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const input = rendered.container.querySelector('input');
			expect(input).toBeDefined();
			expect(input?.value).toStrictEqual('Some value');
		});
	},
	testOptions
);
