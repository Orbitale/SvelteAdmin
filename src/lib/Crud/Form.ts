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
