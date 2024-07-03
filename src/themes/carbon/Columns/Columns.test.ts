import { describe, it, expect } from 'vitest';
import {render} from '@testing-library/svelte'
import '@testing-library/jest-dom';
import { testOptions } from '$lib/TestOptions';
import {
    CallbackStateProcessor,
    CallbackStateProvider,
    Columns,
    CrudDefinition,
    DashboardDefinition,
    initLocale,
    TextField,
    View
} from "$lib";
import ComponentToTest from "./Columns.svelte";
import TextComponent from "../ViewFieldsComponents/DefaultField.svelte";

describe(
    'Columns component',
    () => {
        it('can be instantiated', async () => {
            const props = mockComponentProps(new Columns('columns', 'Columns label', [
                {
                    name: 'column_1',
                    label: 'Column 1',
                    fields: [new TextField('text', 'Text field')]
                },
            ]));

            const rendered = render(ComponentToTest, props);

            const h2 = rendered.container.querySelector('h2');
            expect(h2).toBeDefined();
            expect(h2?.innerHTML).toStrictEqual('Column 1');
        });
    },
    testOptions,
);

function mockComponentProps(field: Columns) {
    const dashboard = new DashboardDefinition({
        adminConfig: {},
        cruds: [
            new CrudDefinition<string>({
                name: 'test_field',
                label: { singular: 'Test Field', plural: 'Test Fields' },
                operations: [new View([field])],
                stateProvider: new CallbackStateProvider<string>(() => Promise.resolve(null)),
                stateProcessor: new CallbackStateProcessor<string>(() => {})
            }),
        ]
    });

    initLocale('fr');

    return {
        FieldComponent: TextComponent,
        field: field,
        operation: (dashboard.cruds[0] as CrudDefinition<string>).options.operations[0],
        entityObject: {test_field: 'default_value'},
        value: 'default_value',
        theme: dashboard.adminConfig.theme,
    };
}
