import { describe, it, expect } from 'vitest';
import {render} from '@testing-library/svelte'
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import ComponentToTest from "./NumberField.svelte";
import {faker} from "@faker-js/faker";

describe(
    'NumberField component',
    () => {
        it('displays error with undefined', async () => {
            const rendered = render(ComponentToTest, {
                value: undefined,
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual('No value');
        });

        it('displays error with empty string', async () => {
            const rendered = render(ComponentToTest, {
                value: '',
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual('No value');
        });

        it.each([
            { value: 'Some value' },
            { value: {} },
            { value: {a: 'b'} },
            { value: [] },
            { value: [1, 2] },
            { value: ['a', 'b'] },
        ])('displays error with non-number value "%s"', async (value) => {
            const rendered = render(ComponentToTest, {
                value: value,
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual('NaN');
        });

        it.each(Array(5).fill(0).map(() => faker.number.int({min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER})))('displays number with integer value "%d"', async (value) => {
            const rendered = render(ComponentToTest, {
                value: value,
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual(value.toString());
        });

        it.each(Array(5).fill(0).map(() => faker.number.float({min: -50000, max: 50000, fractionDigits: 12})))('displays number with float value "%d"', async (value) => {
            const rendered = render(ComponentToTest, {
                value: value,
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual(value.toString());
        });

        it.each(Array(5)
            .fill(0)
            .map(() => faker.number.bigInt({min: BigInt(Number.MIN_SAFE_INTEGER), max: BigInt(Number.MAX_SAFE_INTEGER)}))
        )('displays number with bigint value "%d"', async (value) => {
            const rendered = render(ComponentToTest, {
                value: value,
            });

            const child = rendered.container.querySelector('span');
            expect(child).toBeDefined();
            expect(child?.innerHTML).toStrictEqual(value.toString().replace(/n$/gi, ''));
        });
    },
    testOptions,
);
