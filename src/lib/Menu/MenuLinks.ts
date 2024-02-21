import {type Action, type ActionIcon, DefaultAction} from '$lib/actions';
import type { Optional } from '$lib/genericTypes';
import type { CarbonIcon } from 'carbon-icons-svelte/lib/CarbonIcon';

/** */
export type MenuLink = Action;

/** */
export type itemMenuLinks = {
	icon?: CarbonIcon|null,
	links: Array<MenuLink>
}

/** */
export class Submenu extends DefaultAction {
	private readonly _links: Array<MenuLink>;

	get links(): Array<MenuLink> {
		return this._links;
	}

	constructor(label: string, icon: Optional<ActionIcon>, links: Array<MenuLink>) {
		super(label, icon);
		this._links = links;
	}
}

/** */
export class Divider extends DefaultAction {
	constructor() {
		super('divider', undefined, {});
	}
}
