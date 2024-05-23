import { describe, it, expect } from 'vitest';
import { testOptions } from '$lib/TestOptions';
import { getRequestParams } from '$lib/Request';
import type { Page } from '@sveltejs/kit';

describe(
	'Request parameters',
	() => {
		it('can get parameters from empty params and url', () => {
			const page = mockPage('https://localhost/');

			expect(getRequestParams(page, true)).toStrictEqual({});
		});

		it('can get parameters from url', () => {
			const page = mockPage('https://localhost/?id=1');

			expect(getRequestParams(page, true)).toStrictEqual({ id: '1' });
		});

		it('do not get params from url if there is no browser', () => {
			const page = mockPage('https://localhost/?id=1');

			expect(getRequestParams(page, false)).toStrictEqual({});
		});
	},
	testOptions
);

function mockPage(url: string): Page {
	return {
		params: {},
		url: new URL(url),
		route: {
			id: ''
		},
		status: 200,
		error: null,
		data: {},
		state: '',
		form: ''
	};
}
