import type { ThemeConfig } from '$lib/themes/ThemeConfig';
import material3 from '$lib/themes/material3';

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
		theme: material3,
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		rootUrl: '/',
		head: {
			appName: '',
			brandName: ''
		}
	};
}
