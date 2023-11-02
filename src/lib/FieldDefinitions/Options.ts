export type Options = {
	required: boolean;
	disabled: boolean;
	help?: string;
	validator?: (value: object) => boolean;
	disableOnOperations?: Array<string>;
	[key: string]: string | number | boolean | unknown;
};

export type CommonOptions = Options & {
	placeholder?: string;
};
