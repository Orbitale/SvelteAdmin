import type { ThemeConfig } from '$lib';
import { carbon } from '$lib/themes';

/** */
export type AdminConfig = {
	theme: ThemeConfig;
	defaultLocale: string;
	autoCloseSideMenu: boolean;
	rootUrl: string;
	head: {
		brandName: string;
		appName: string;
	};
};

export function defaultAdminConfig(): AdminConfig {
	return {
		theme: carbon,
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		rootUrl: '/',
		head: {
			appName: '',
			brandName: ''
		}
	};
}
