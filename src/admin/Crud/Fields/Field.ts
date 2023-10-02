export type Options = {
    required: boolean;
}
export class Field<T extends Options> {
    public readonly name: string;
    public readonly label: string;
    public readonly options: Partial<T>;

    constructor(name: string, label: string = '', options: T = {} as T) {
        this.name = name;
        this.label = label ? label : name;
        options.required ??= true;
        this.options = options || {};
    }
}

export type TextOptions = Options & {
    maxLength?: number,
    stripTags?: boolean,
};
export class TextField extends Field<TextOptions> {
}

export type TextareaOptions = TextOptions & {
    rows?: number,
};
export class TextareaField extends Field<TextareaOptions> {
}

export type CheckboxOptions = Options & {
};
export class CheckboxField extends Field<CheckboxOptions> {
}

export type ToggleOptions = Options & {
};
export class ToggleField extends Field<ToggleOptions> {
}

export type NumberOptions = Options & {
};
export class NumberField extends Field<NumberOptions> {
}

export type UrlOptions = Options & {
};
export class UrlField extends Field<UrlOptions> {
}

export type ColorOptions = Options & {
};
export class ColorField extends Field<ColorOptions> {
}
