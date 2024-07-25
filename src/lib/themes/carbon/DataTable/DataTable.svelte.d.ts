import { SvelteComponent } from "svelte";
import type { Headers, Rows } from '$lib/DataTable';
import type { Action } from '$lib/Actions';
import type { FilterInterface, FilterOptions } from '$lib/Filter';
import type { ThemeConfig } from '$lib/types';
declare const __propDef: {
    props: {
        [x: string]: any;
        headers?: Headers | undefined;
        rows: Promise<Rows>;
        actions?: Action[] | undefined;
        globalActions?: Array<Action> | undefined;
        filters?: Array<FilterInterface<FilterOptions>> | undefined;
        page: number | undefined;
        theme: ThemeConfig;
        sortable: boolean;
        onSort: () => unknown | undefined;
    };
    events: {
        [x: string]: CustomEvent<FormDataEntryValue>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        description: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type DataTableProps = typeof __propDef.props;
export type DataTableEvents = typeof __propDef.events;
export type DataTableSlots = typeof __propDef.slots;
export default class DataTable extends SvelteComponent<DataTableProps, DataTableEvents, DataTableSlots> {
}
export {};
