import { describe, it, expect } from 'vitest';
import {render} from '@testing-library/svelte'
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import ComponentToTest from "./DateField.svelte";

describe(
    'DateField component',
    () => {
        it('can be instantiated with empty value', async () => {
            const rendered = render(ComponentToTest, {
                value: undefined,
            });

            const element = rendered.container;
            expect(element).toBeDefined();
            expect(element.innerHTML).toStrictEqual('');
        });

        it('can be instantiated with Date object', async () => {
            const date = new Date('2024-01-01');
            const rendered = render(ComponentToTest, {
                value: date,
            });

            const element = rendered.container;
            expect(element).toBeDefined();
            expect(element.innerHTML).toStrictEqual(`2024-01-01`);
        });

        it('can be instantiated with string value', async () => {
            const date = '2024-05-26 00:00:00 GMT+02:00';
            const rendered = render(ComponentToTest, {
                value: date,
            });

            const element = rendered.container;
            expect(element).toBeDefined();
            expect(element.innerHTML).toStrictEqual('2024-05-26');
        });
    },
    testOptions,
);
