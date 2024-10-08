import type { ComponentType, SvelteComponent } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

type Optional<T> = T | null | undefined;

/** */
export type ActionIcon = string | SvelteComponent | ComponentType;

/** */
export type ActionOptions = {
	buttonKind?: string;
	htmlAttributes?: HTMLAnchorAttributes | HTMLButtonAttributes;
	[key: string]: unknown;
};

/**
 * @interface
 **/
export interface Action {
	get label(): string;
	get icon(): ActionIcon | null | undefined;
	get options(): ActionOptions;
}

/** */
export abstract class DefaultAction implements Action {
	protected readonly _label: string;
	protected readonly _icon?: Optional<ActionIcon>;
	protected readonly _options: ActionOptions;

	protected constructor(label: string, icon?: Optional<ActionIcon>, options?: ActionOptions) {
		this._label = label;
		this._icon = icon;
		this._options = options || {};
	}

	get label(): string {
		return this._label;
	}

	get icon(): ActionIcon | null | undefined {
		return this._icon;
	}

	get options(): ActionOptions {
		return this._options;
	}
}

/** */
export class CallbackAction extends DefaultAction {
	private readonly _callback: (item?: unknown) => void;

	constructor(
		label: string,
		icon: Optional<ActionIcon>,
		callback: (item?: unknown) => void,
		options?: ActionOptions
	) {
		super(label, icon, options);
		this._callback = callback;
	}

	public call(item?: unknown): unknown {
		return this._callback.call(null, item);
	}
}

/** */
export class UrlAction extends DefaultAction {
	private readonly _url: string;

	constructor(label: string, url: string, icon?: ActionIcon, options?: ActionOptions) {
		super(label, icon, options);
		this._url = url;
	}

	public url(
		item: object & { [key: string]: string | number | boolean } = {},
		identifierFieldName: string = 'id'
	): string {
		if (Array.isArray(item)) {
			console.warn(
				'Provided item for UrlAction is an array, and arrays are not supported. Using the first item of the array, or an empty object if not set.'
			);
			item = item[0] ?? {};
		}

		let url = this._url || '';

		const mightNeedId = item[identifierFieldName] !== undefined;
		const hasIdAsParameter = url.match(':id');

		for (const field in item) {
			let value = item[field];
			value = !value.toString ? '' : value.toString();
			if (value.length) {
				url = url.replace(`:${field}`, value.toString() || '');
			}
		}

		if (mightNeedId && !hasIdAsParameter) {
			url += '?id=' + (item[identifierFieldName] ?? '');
		}

		return `${url}`;
	}
}
