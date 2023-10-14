import type { KeyValueObject } from './generic_types.ts';
import type { Page } from '@sveltejs/kit';

/**
 * Extracts all parameters from the URL based on Svelte's Page store.
 *
 * "$page.params", which corresponds to Route parameters that are defined in your
 *   Svelte routes. With SvelteAdmin, routes can look like "/admin/[crud]/[action]".
 *   In this case, calling the "/admin/books/list" will set "crud" and "action" parameters in the Page store.
 *
 * When this function is called in the context of a web browser (hence the "browser" boolean arg), we will also merge the url.searchParams object, which is an iterator containing all elements from the QueryString, like "?crud=...&action=..." or "?id=...".
 *
 * Route params will always have precedence over QueryString, to avoid unexpected overrides.
 */
export function getRequestParams(page: Page, browser: boolean): KeyValueObject {
	let params = { ...page.params };

	if (browser) {
		params = { ...Object.fromEntries(page.url.searchParams), ...params };
	}

	return params;
}
