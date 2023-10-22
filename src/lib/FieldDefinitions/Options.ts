export type Options = {
	required: boolean;
	disabled: boolean;
	help?: string;
	validator?: (value: object) => boolean;
	[key: string]: string | number | boolean | unknown;
};

export type CommonOptions = Options & {
	placeholder?: string;
};
