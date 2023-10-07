import {init, locale as localeStore, addMessages, _ as translationsStore} from 'svelte-i18n';
import { get } from 'svelte/store';

import {KeyValueObject} from "./generic_types.ts";
import en from "./translations/en.ts";
import fr from "./translations/fr.ts";

export type Dictionary = KeyValueObject;
export type Dictionaries = {[key: string]: Dictionary};

const admin_dictionaries: Dictionaries = {
    'en': en,
    'fr': fr,
};

export function initLocale(
	default_locale: Intl.Locale | string,
	available_locales: Array<Intl.Locale | string>,
	dictionaries: Dictionaries = {}
) {
	let locale = default_locale.toString();

	if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
		const localeFromLocalStorage = configureLocaleFromLocalStorage(available_locales);
		if (localeFromLocalStorage) {
			locale = localeFromLocalStorage;
		}
        localeStore.subscribe((newLocale: string | null | undefined) => {
            if (!newLocale) {
                return;
            }
            window.localStorage.setItem('__admin_locale', newLocale);
        });
    }

	// Validate locale.
    validateLocale(locale);

    // Admin translations
	Object.keys(admin_dictionaries).forEach((locale) => {
		addMessages(locale, admin_dictionaries[locale]);
	});

    // User-customized translations
    Object.keys(dictionaries).forEach((locale) => {
		addMessages(locale, dictionaries[locale] || {});
	});

	init({
		fallbackLocale: locale,
		initialLocale: locale
	});
}

// To be used only when in need of retrieving a value without the original store.
// Mostly in Typescript files.
// In Svelte files, use the "_" store from the "svelte-i18n" package directly.
export function translateSync(term: string, options?: object) {
	return get(translationsStore)(term, options);
}

function configureLocaleFromLocalStorage(available_locales: Array<Intl.Locale | string>): string | null {
	const storedLocale = window.localStorage.getItem('__admin_locale');

	if (!storedLocale) {
		return null;
	}
    if (available_locales.indexOf(storedLocale) < 0) {
        console.warn(`Locale saved in local storage is "${storedLocale}" but is not configured in the application locales.
One of the possible causes is that it is not supported by the SvelteAdmin package.
Possible values: ${available_locales.join(', ')}).
Using fallback locale as default.`);
        return null;
    }

    validateLocale(storedLocale);

	return storedLocale;
}

function validateLocale(locale: string) {
    try {
        new Intl.Locale(locale);
    } catch (e) {
        console.error(`Locale "${locale}" is not a valid standard locale.`);
        throw e;
    }
}
