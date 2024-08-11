/** */
export type AdminConfig = {
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
		defaultLocale: 'en',
		autoCloseSideMenu: false,
		rootUrl: '/',
		head: {
			appName: '',
			brandName: ''
		}
	};
}
