import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import ComponentToTest from './EmailField.svelte';
import { EmailField } from '$lib';

describe(
	'EmailField component',
	() => {
		it('can be instantiated with undefined', async () => {
			const rendered = render(ComponentToTest, {
				field: new EmailField('email_field'),
				value: undefined
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			expect(rendered.container.querySelector('input')).toBeDefined();
		});

		it('can be instantiated empty string', async () => {
			const rendered = render(ComponentToTest, {
				field: new EmailField('email_field'),
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
				field: new EmailField('email_field'),
				value: 'test@dummy.localhost'
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const input = rendered.container.querySelector('input');
			expect(input).toBeDefined();
			expect(input?.value).toStrictEqual('test@dummy.localhost');
		});
	},
	testOptions
);
