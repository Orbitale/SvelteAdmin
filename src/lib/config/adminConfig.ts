import type { ThemeConfig } from '$lib/themes/ThemeConfig.ts';
import carbon from '$lib/themes/carbon';

export type AdminConfig = {
	theme: ThemeConfig;
	defaultLocale: string;
	autoCloseSideMenu: boolean;
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
		head: {
			appName: '',
			brandName: ''
		}
	};
}
