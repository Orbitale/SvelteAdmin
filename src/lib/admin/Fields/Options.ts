export type Options = {
    required: boolean;
    disabled: boolean;
    help?: string;
    [key: string]: any;
}

export type CommonOptions = Options & {
    placeholder?: string;
};
