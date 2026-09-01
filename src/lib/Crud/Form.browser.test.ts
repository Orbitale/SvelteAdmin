import { describe, expect, it, vi } from 'vitest';
import { getSubmittedFormData } from '$lib';
import { JSDOM } from 'jsdom';

describe('Submitted form data', () => {
	it(
		'does not work if no target is specified',
		() => {
			const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

			const submitted = getSubmittedFormData({} as unknown as SubmitEvent);

			expect(submitted).toStrictEqual({});
			expect(consoleError).toHaveBeenCalledOnce();
			expect(consoleError).toHaveBeenLastCalledWith(
				'No form target specified. Did you forget to inject the proper SubmitEvent to the function?'
			);
		}
	);

	it(
		'can handle empty input',
		() => {
			const submitted = getSubmittedFormData(mockSubmitEvent());

			expect(submitted).toStrictEqual({});
		}
	);

	it(
		'can handle simple input',
		() => {
			const submitted = getSubmittedFormData(
				mockSubmitEvent([
					['title', 'Some title'],
					['description', 'Some description']
				])
			);

			expect(submitted).toStrictEqual({
				title: 'Some title',
				description: 'Some description'
			});
		}
	);

	it(
		'can handle input containing the same key more than once',
		() => {
			const submitted = getSubmittedFormData(
				mockSubmitEvent([
					['title', 'First title'],
					['title', 'Second title']
				])
			);

			expect(submitted).toStrictEqual({
				title: ['First title', 'Second title']
			});
		}
	);
});

function mockSubmitEvent(submittedData: Array<[string, string]> = []) {
	const { document } = new JSDOM(`...`).window;

	const form = document.createElement('form');

	const submitter = document.createElement('button');
	submitter.type = 'submit';
	form.appendChild(submitter);

	submittedData.forEach(([key, value]) => {
		const input = document.createElement('input');
		input.name = key;
		input.value = value;
		form.appendChild(input);
	});

	return {
		submitter: submitter,
		target: form
	} as unknown as SubmitEvent;
}
