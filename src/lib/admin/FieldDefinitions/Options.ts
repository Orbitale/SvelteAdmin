export type Options = {
    required: boolean;
    disabled: boolean;
    help?: string;
    validator?: (value: any) => boolean;
    [key: string]: any;
}

export type CommonOptions = Options & {
    placeholder?: string;
};
