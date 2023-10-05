export type AdminConfig = {
    head: {
        brandName: string,
        appName: string,
    }
};

export type SubmitButtonType =
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "danger"
    | "danger-tertiary"
    | "danger-ghost";
