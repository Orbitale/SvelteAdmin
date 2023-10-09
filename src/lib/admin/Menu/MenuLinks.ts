import { type Action, type ActionIcon, DefaultAction } from '../actions';
import type { Optional } from '../generic_types';

export type MenuLink = Action;

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

export class Divider implements Action {
	get label(): string {
		return 'divider';
	}
}
