import { faker } from '@faker-js/faker';

export type Test = {
	id: string;
	[key: string]: unknown;
};

const baseTests: Array<Test> = Array(10)
	.fill(undefined)
	.map(() => {
		return {
			id: faker.string.uuid(),
			text_field: faker.music.songName(),
			textarea_field: faker.lorem.lines(2),
			checkbox_field: faker.number.int({min: 0, max: 1}) === 1,
			number_field: faker.number.float(),
			toggle_field: faker.number.int({min: 0, max: 1}) === 1,
			url_field: faker.internet.url(),
			path_field: faker.system.filePath().replace(/^\/[^/]+\//g, '/')
		};
	});

export function getMemoryTests(): Array<Test> {
	//return [];
	//*
	if (typeof window === 'undefined') {
		return [];
	}

	let memory = window.localStorage.getItem('tests');
	if (memory === null || memory === undefined || memory === '' || memory === '[]') {
		memory = JSON.stringify(baseTests);
		window.localStorage.setItem('tests', memory);
	}

	return JSON.parse(memory);
	//*/
}

export function getTest(id: string | number): Test {
	const foundTests = getMemoryTests().filter((b) => b.id.toString() === id.toString());

	if (foundTests.length === 0) {
		throw new Error(`Test with id "${id}" was not found.`);
	}

	if (foundTests.length !== 1) {
		throw new Error(`Error: Found multiple tests with id "${id}".`);
	}

	return foundTests[0];
}
