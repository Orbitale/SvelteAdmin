export type Optional<T> = T | null | undefined;

export type KeyValueObject = { [key: string]: string };

export type RequestParameters = {
    page?: Optional<string|number>,
    [key: string]: Optional<string|number>,
};
