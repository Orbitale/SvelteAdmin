import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ComponentToTest from './EmailField.svelte';

describe(
	'EmailField component',
	() => {
		it('can be instantiated with undefined', async () => {
			const rendered = render(ComponentToTest, {
				value: undefined
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			expect(element.innerHTML.replace('<!---->', '')).toStrictEqual('-');
		});

		it('can be instantiated empty string', async () => {
			const rendered = render(ComponentToTest, {
				value: ''
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			expect(element.innerHTML.replace('<!---->', '')).toStrictEqual('-');
		});

		it('can be instantiated specific value', async () => {
			const rendered = render(ComponentToTest, {
				value: 'test@dummy.localhost'
			});

			const element = rendered.container;
			expect(element).toBeDefined();
			const tagInner = element.querySelector('span');
			expect(tagInner).toBeDefined();
			expect(tagInner?.innerHTML.replace('<!---->', '')).toStrictEqual('test@dummy.localhost');
		});
	}
);
