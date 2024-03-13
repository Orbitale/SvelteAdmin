import type { FilterTheme } from '$lib';

/** */
export type FilterOptions = { [key: string]: string };

/** */
export interface FilterInterface<T extends FilterOptions> {
	readonly field: string;
	readonly label: string;
	readonly options: T;
	readonly componentName: FilterTheme;
}

/** */
export abstract class Filter<T extends FilterOptions> implements FilterInterface<T> {
	public readonly field: string;
	public readonly label: string;
	public readonly options: T;
	abstract readonly componentName: FilterTheme;

	constructor(field: string, label?: string, options?: T) {
		this.field = field;
		this.label = label || field;
		this.options = (options as T) || {};
	}
}

/** */
export class TextFilter extends Filter<FilterOptions> {
	public readonly componentName: FilterTheme = 'text';
}

/** */
export class BooleanFilter extends Filter<FilterOptions> {
	public readonly componentName: FilterTheme = 'boolean';
}

/** */
export class DateFilter extends Filter<FilterOptions> {
	public readonly componentName: FilterTheme = 'date';
}

/** */
export class ExistsFilter extends Filter<FilterOptions> {
	public readonly componentName: FilterTheme = 'boolean';
}

/** */
export class NumericFilter extends Filter<FilterOptions> {
	public readonly componentName: FilterTheme = 'numeric';
}
