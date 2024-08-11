import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import ComponentToTest from './CheckboxField.svelte';

describe(
	'CheckboxField component',
	() => {
		it('can be instantiated with value "true"', async () => {
			const rendered = render(ComponentToTest, {
				value: true
			});

			const svg = rendered.container.querySelector('svg') as SVGSVGElement;
			expect(svg).toBeDefined();
			expect(svg).toBeInstanceOf(SVGSVGElement);
			expect(svg.style.color).toBe('rgb(0, 170, 0)');
		});

		it('can be instantiated with value "false"', async () => {
			const rendered = render(ComponentToTest, {
				value: false
			});

			const svg = rendered.container.querySelector('svg') as SVGSVGElement;
			expect(svg).toBeDefined();
			expect(svg).toBeInstanceOf(SVGSVGElement);
			expect(svg.style.color).toBe('rgb(170, 0, 0)');
		});
	},
	testOptions
);
