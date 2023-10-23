export type AdminConfig = {
	defaultLocale: string;
	head: {
		brandName: string;
		appName: string;
	};
};

export function emptyAdminConfig(): AdminConfig {
	return {
		defaultLocale: 'en',
		head: {
			appName: '',
			brandName: ''
		}
	};
}
