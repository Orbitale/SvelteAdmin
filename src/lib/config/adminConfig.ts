export type AdminConfig = {
	defaultLocale: string;
	autoCloseSideMenu: boolean;
	head: {
		brandName: string;
		appName: string;
	};
};

export function emptyAdminConfig(): AdminConfig {
	return {
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		head: {
			appName: '',
			brandName: ''
		}
	};
}
