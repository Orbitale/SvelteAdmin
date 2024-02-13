import { describe, it, expect, type TestOptions } from 'vitest';
import { CallbackAction, UrlAction } from '$lib/actions';

const testOpts: TestOptions = {
	repeats: process.env.REPEAT ? parseInt(process.env.REPEAT) : undefined
};

describe(
	'URL actions',
	() => {
		it('handles item fields in specified request parameters', () => {
			const action = new UrlAction('', '/test/:field1/:field2');
			const item = {
				field1: 'val1',
				field2: 'val2',
				field3: 'val3'
			};

			expect(action.url(item)).toBe('/test/val1/val2');
		});

		it('handles item ID with default "id" when not specified', () => {
			const action = new UrlAction('', '/test/:field1');
			const item = {
				id: 'identifier',
				field1: 'val1'
			};

			expect(action.url(item)).toBe('/test/val1?id=identifier');
		});

		it('handles item ID with custom "id" property', () => {
			const action = new UrlAction('', '/test/:field1');
			const item = {
				customId: 'custom_identifier',
				field1: 'val1'
			};

			expect(action.url(item, 'customId')).toBe('/test/val1?id=custom_identifier');
		});
	},
	testOpts
);

describe(
	'Callback actions',
	() => {
		it('calls function', () => {
			let called = false;
			const callback = () => {
				called = true;
				return called;
			};
			const action = new CallbackAction('', null, callback);

			expect(action.call()).toBe(true);
			expect(called).toBe(true);
		});

		it('calls function with item as argument', () => {
			let called = false;
			const baseItem = {
				field: 'value'
			};
			const callback = (item?: object | undefined): boolean => {
				called = true;
				// @ts-ignore
				item.field = 'newValue';
				return called;
			};
			const action = new CallbackAction('', null, callback);

			expect(action.call(baseItem)).toBe(true);
			expect(baseItem.field).toBe('newValue');
		});
	},
	testOpts
);
