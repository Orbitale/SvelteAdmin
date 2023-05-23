import Field, {type FieldOptions} from './Field.js';

export type CollectionFieldOptions = {itemOptions?: FieldOptions, [key: string]: any};

export default class CollectionField extends Field {
	public readonly itemField: Field;
	public readonly collectionOptions: CollectionFieldOptions;

	constructor(name: string, label: string, itemField: Field, options: CollectionFieldOptions = {}) {
		super(name, label, options.itemOptions || {});
		this.itemField = itemField;
		this.collectionOptions = options;
	}

	validate(value: any): void {
		if (!Array.isArray(value)) {
			throw new Error(`Expected array for field "${this.name}", got "${typeof value}" instead.`);
		}
	}

	display(value: any): string {
		// TODO
		return "Todo: "+value.join(', ');
	}
}
