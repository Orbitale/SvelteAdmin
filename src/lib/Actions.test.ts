import { describe, it, expect } from 'vitest';
import { CallbackAction, UrlAction } from '$lib/Actions';
import { testOptions } from '$lib/TestOptions';
import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';

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

		it('can contain main options', () => {
			const icon = TrashCan;
			const action = new UrlAction('Some label', '/', icon, {
				htmlAttributes: { class: 'some-class' },
				buttonKind: 'some-kind'
			});

			expect(action.icon).toBe(icon);
			expect(action.options).toStrictEqual({
				htmlAttributes: { class: 'some-class' },
				buttonKind: 'some-kind'
			});
		});
	},
	testOptions
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
			const callback = (item?: unknown): void => {
				called = true;
				// @ts-ignore
				item.field = 'newValue';
			};
			const action = new CallbackAction('', null, callback);

			expect(called).toBe(false);

			action.call(baseItem);

			expect(called).toBe(true);
			expect(baseItem.field).toBe('newValue');
		});
	},
	testOptions
);
