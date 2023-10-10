export type AdminConfig = {
	head: {
		brandName: string;
		appName: string;
	};
};

export function emptyAdminConfig(): AdminConfig {
	return {
		head: {
			appName: '',
			brandName: ''
		}
	};
}
