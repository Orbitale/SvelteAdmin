import type {CrudOperation, FieldInterface, FieldOptions} from "$lib";

export type SubmittedData = Record<string, FormDataEntryValue>;

/**
 * Function to get an record of {@link FormDataEntryValue} items from an "onSubmit" form {@link SubmitEvent} object.
 */
export function getSubmittedFormData(event: SubmitEvent): SubmittedData {
	const normalizedData: SubmittedData = {};

	const target = event.target;

	if (!target) {
		console.error(
			'No form target specified. Did you forget to inject the proper SubmitEvent to the function?'
		);

		return {};
	}

	new FormData(target as HTMLFormElement, event.submitter).forEach((value, key) => {
		normalizedData[key] = value;
	});

	return normalizedData;
}

/**
 * Takes the submitted data and rebuilds a valid object with it.
 *
 * For now, only cares about the case where a field is disabled and HTML submitted data are empty.
 * Instead of disabled fields being empty, we set them back to "defaultData",
 * to avoid users wrongly update data with an "undefined" value (which could corrupt a database...).
 *
 * Another good side-effect for the "disabled" part is that if a user maliciously
 * removes the 'disabled="disabled"' HTML attribute from an "<input>" tag and/or updates the value,
 * then instead of using potentially mischievous input data, we enforce them to be consistent based on the defaults.
 * Kinda makes "hacking" a bit harder.
 */
export function sanitizeFormData(data: SubmittedData, defaultData: Record<string, unknown>, operation: CrudOperation): SubmittedData {
	operation.fields.forEach((field: FieldInterface<FieldOptions>) => {
		if (field.options.disabled) {
			if (typeof defaultData[field.name] !== 'undefined') {
				data[field.name] = defaultData[field.name] as FormDataEntryValue;
			} else {
				delete data[field.name];
			}
		}
	});

	return data;
}
