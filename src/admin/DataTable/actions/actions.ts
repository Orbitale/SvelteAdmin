export interface ItemAction {
	get label(): string;
}

export abstract class DefaultAction implements ItemAction {
	protected readonly _label: string;

	protected constructor(name: string) {
		this._label = name;
	}

	get label(): string {
		return this._label;
	}
}

export class CallbackAction extends DefaultAction {
	private readonly _callback: Function;

	constructor(name: string, callback: Function) {
		super(name);
		this._callback = callback;
	}

	public call(item: object): string {
		return this._callback.call(null, item);
	}
}

export class UrlAction extends DefaultAction {
	private readonly params: Map<string, string>;
	private readonly _url: string;

	constructor(label: string, url: string, params?: Map<string, string>) {
		super(label);
		this.params = params || new Map();
		this._url = url;
	}

	public url(item: object): string {
		let url = this._url;

		Object.keys(item).forEach((field) => {
			url = url.replace(`:${field}`, item[field]);
		});

		this.params.forEach((field, value) => {
			url = url.replace(`:${field}`, value);
		});

		return `${url}`;
	}
}
