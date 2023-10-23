import { dashboard } from '../../../../testApp/Dashboard';

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const routes = [];

	for (const crud of dashboard.cruds) {
		for (const operation of crud.options.operations) {
			routes.push({
				crud: crud.name,
				operation: operation.name
			});
		}
	}

	return routes;
}
