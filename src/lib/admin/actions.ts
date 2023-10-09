import type { SvelteComponent } from 'svelte';
import type { Optional } from './generic_types.ts';

export type ActionIcon = object | string | HTMLElement | SvelteComponent;

export interface Action {
	get label(): string;
}

export abstract class DefaultAction implements Action {
	protected readonly _label: string;
	protected readonly _icon?: Optional<ActionIcon>;

	protected constructor(label: string, icon?: Optional<ActionIcon>) {
		this._label = label;
		this._icon = icon;
	}

	get label(): string {
		return this._label;
	}

	get icon(): ActionIcon | null | undefined {
		return this._icon;
	}
}

export class CallbackAction extends DefaultAction {
	private readonly _callback: Function;

	constructor(label: string, icon: Optional<ActionIcon>, callback: Function) {
		super(label, icon);
		this._callback = callback;
	}

	public call(item: object): string {
		return this._callback.call(null, item);
	}
}

export class UrlAction extends DefaultAction {
	private readonly params: Map<string, string>;
	private readonly _url: string;

	constructor(
		label: string,
		icon: Optional<ActionIcon>,
		url: string,
		params?: Map<string, string>
	) {
		super(label, icon);
		this.params = params || new Map();
		this._url = url;
	}

	public url(item?: object): string {
		let url = this._url || '';

		Object.keys(item || {}).forEach((field) => {
			// @ts-ignore
			let value = item[field];
			if (!value.toString) {
				value = '';
			}
			url = url.replace(`:${field}`, value.toString() || '');
		});

		this.params.forEach((field, value) => {
			url = url.replace(`:${field}`, value);
		});

		return `${url}`;
	}
}
