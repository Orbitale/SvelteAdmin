import type { ThemeConfig } from '$lib/types';
import carbon from '$lib/themes/carbon';

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

export function emptyAdminConfig(): AdminConfig {
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
