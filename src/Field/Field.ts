export type FieldOptions = {[key: string]: any};

/**
 * Value is resolved by the CRUD object,
 *  with "object[field.name]",
 *  but is displayed by the Field object.
 *
 * The Field object is responsible for validating
 *  the value type before displaying it.
 */
export default abstract class Field {
	public readonly name: string;
	public readonly text: string;
	public readonly field_options: FieldOptions;

	constructor(
		name: string,
		label: string = '',
		options: FieldOptions = {},
	) {
		this.name = name;
		this.text = label === '' ? name : label;
		this.field_options = options;
	}

	/**
	 * Called when before displaying or editing the entity property value.
	 */
	abstract validate(value: any): void;

	/**
	 * When this method is called, value has already been validated.
	 */
	abstract display(value: any): string;
}
