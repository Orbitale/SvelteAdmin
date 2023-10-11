import { init, addMessages } from 'svelte-i18n';

import type { KeyValueObject } from './generic_types.ts';
import en from './translations/en.ts';
import fr from './translations/fr.ts';

export type Dictionary = KeyValueObject;
export type Dictionaries = { [key: string]: Dictionary };

const adminDictionaries: Dictionaries = {
	en: en,
	fr: fr
};

export function initLocale(
	locale: Intl.Locale | string,
	dictionaries: Dictionaries = {}
) {
	locale = locale.toString();

	// Validate locale.
	validateLocale(locale);

	// Admin translations
	for (const dictionaryLocale in adminDictionaries) {
		addMessages(dictionaryLocale, adminDictionaries[dictionaryLocale]);
	}

	// User-based translations
	for (const dictionaryLocale in dictionaries) {
		addMessages(dictionaryLocale, dictionaries[dictionaryLocale]);
	}

	init({
		fallbackLocale: adminDictionaries[locale] ? locale : 'en',
		initialLocale: locale
	});
}

function validateLocale(locale: string) {
	try {
		new Intl.Locale(locale);
	} catch (e) {
		console.error(`Locale "${locale}" is not a valid standard locale.`);
		throw e;
	}
}
