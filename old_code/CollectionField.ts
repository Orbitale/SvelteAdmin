import type AssociatedField from './AssociatedField';
import Field from './Field';
import FieldOptions from './FieldOptions';

export default class CollectionField extends Field {
	constructor(name: string, text: string, item_field: Field) {
		super(name, text, new FieldOptions(item_field));
	}

	public displayFromItem(item: object | Array): object | Array | null {
		const items = item[this.name];

		if (items.length === 0 || !(items instanceof Array)) {
			return null;
		}

		if (!this._associated_field) {
			return null;
		}

		let field: Field | AssociatedField | null = this._associated_field;

		return items.map(
			(singleItem: object | Array) => this._associated_field?.displayFromItem(singleItem)
		);
	}
}
