import Field, {type FieldOptions} from "./Field";

export type AssociatedFieldOptions = {[key: string]: any};

export default class AssociatedField extends Field {
    public readonly associatedFieldOptions: AssociatedFieldOptions;

    constructor(name: string, label: string, associatedField: Field, options: AssociatedFieldOptions = {}) {
        super(name, label, options.fieldOptions || {});
        this.associatedFieldOptions = options;
    }

    validate(value: any): void {
        if (typeof value !== 'object') {
            throw new Error(`Expected object for field "${this.name}", got "${typeof value}" instead.`);
        }
    }

    display(value: any): string {
        // TODO
        return 'todo';
    }
}
