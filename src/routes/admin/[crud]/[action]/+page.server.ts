import {dashboard} from "../../../../testApp/Dashboard.ts";

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const routes = [];

	for (const crud of dashboard.cruds) {
		for (const action of crud.options.actions) {
			routes.push({
				crud: crud.name,
				action: action.name,
			})
		}
	}

	return routes;
}
