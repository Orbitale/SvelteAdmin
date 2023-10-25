import type { ComponentType, SvelteComponent } from 'svelte';
import type { KeyValueObject, Optional } from '$lib/genericTypes';

export type ActionIcon = string | SvelteComponent | ComponentType;

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
	private readonly _callback: (item?: object|undefined) => void;

	constructor(label: string, icon: Optional<ActionIcon>, callback: (item?: object|undefined) => void) {
		super(label, icon);
		this._callback = callback;
	}

	public call(item?: object|undefined): void {
		return this._callback.call(null, item);
	}
}

export class UrlAction extends DefaultAction {
	private readonly _url: string;

	constructor(label: string, url: string, icon?: ActionIcon) {
		super(label, icon);
		this._url = url;
	}

	public url(item: object & KeyValueObject & { id?: string } = {}): string {
		let url = this._url || '';

		const mightNeedId = item.id !== undefined;
		const hasIdAsParameter = url.match(':id');

		for (const field in item) {
			let value = item[field];
			value = !value.toString ? '' : value.toString();
			if (value.length) {
				url = url.replace(`:${field}`, value.toString() || '');
			}
		}

		if (mightNeedId && !hasIdAsParameter) {
			url += '?id=' + (item.id ?? '');
		}

		return `${url}`;
	}
}
