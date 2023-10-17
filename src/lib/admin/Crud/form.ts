export function getSubmittedFormData(event: SubmitEvent): Record<string, unknown> {
	const normalizedData: Record<string, unknown> = {};

	let target = event.target;

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
