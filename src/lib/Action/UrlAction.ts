import Action from "./Action.js";
import type Field from "../Field/Field.js";

export default class UrlAction extends Action {
	private readonly urlTemplate: string;
	private readonly fieldsToUse: Array<Field>;

	constructor(name: string, label: string, urlTemplate: string, fieldsToUse: Array<Field>) {
		super(name, label);
		this.urlTemplate = urlTemplate;
		this.fieldsToUse = fieldsToUse;
	}

	public url(item: object): string {
		let url = ""+this.urlTemplate;

		this.fieldsToUse.forEach((field: Field) => {
			field.validate(item);
			url = url.replace(`:${field.name}`, field.display(item).toString());
		});

		return `${url}`;
	}
}
