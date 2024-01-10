export type BaseOptions = {
	disableOnOperations?: Array<string>;
	[key: string]: string | number | boolean | unknown;
};

export type Options = {
	required?: boolean;
	disabled?: boolean;
	help?: string;
};

export type CommonOptions = Options & {
	placeholder?: string;
};
