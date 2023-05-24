import Action from './Action.js';

export default class CallbackAction extends Action {
	private readonly _callback: Function;

	constructor(name: string, label: string, callback: Function) {
		super(name, label);
		this._callback = callback;
	}

	public call(item: object): string {
		return this._callback.call(null, item);
	}
}
