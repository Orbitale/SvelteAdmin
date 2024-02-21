import { type Action, type ActionIcon, type ActionOptions, DefaultAction } from '$lib/actions';
import type { Optional } from '$lib/genericTypes';

/** */
export type MenuLink = Action;

/** */
export class Submenu extends DefaultAction {
	private readonly _links: Array<MenuLink>;

	get links(): Array<MenuLink> {
		return this._links;
	}

	constructor(
		label: string,
		icon: Optional<ActionIcon>,
		links: Array<MenuLink>,
		options?: ActionOptions
	) {
		super(label, icon, options);
		this._links = links;
	}
}

/** */
export class Divider extends DefaultAction {
	constructor() {
		super('divider', undefined, {});
	}
}
