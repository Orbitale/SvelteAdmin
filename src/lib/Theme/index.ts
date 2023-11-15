import type {
	CrudTheme,
	FormFieldTheme,
	ThemeConfig,
	ViewFieldTheme
} from '$lib/themes/ThemeConfig';
import type { ComponentType } from 'svelte';
import { get } from 'svelte/store';
import themeStore from '$lib/stores/theme';

export function getCrudComponent(name: CrudTheme): ComponentType | null {
	const theme: ThemeConfig = get(themeStore);
	if (!theme.crud[name]) {
		return null;
	}

	return theme.crud[name];
}

export function getViewFieldComponent(name: ViewFieldTheme): ComponentType | null {
	const theme: ThemeConfig = get(themeStore);
	if (!theme.viewFields[name]) {
		return null;
	}

	return theme.viewFields[name];
}

export function getFormFieldComponent(name: FormFieldTheme): ComponentType | null {
	const theme: ThemeConfig = get(themeStore);
	if (!theme.formFields[name]) {
		return null;
	}

	return theme.formFields[name];
}
