import Field from "./Field.js";

export default class TextField extends Field {
    validate(value: any): void {
        if (typeof value !== 'string') {
            throw new Error(`Expected string for field "${this.name}", got "${typeof value}" instead.`);
        }
    }

    display(value: any): string {
        return value;
    }
}
