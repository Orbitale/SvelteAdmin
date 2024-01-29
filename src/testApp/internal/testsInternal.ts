import { faker } from '@faker-js/faker';

export type Test = {
	id: string;
	text_field: string;
	textarea_field: string;
	checkbox_field: boolean;
	number_field: number;
	toggle_field: boolean;
	url_field: string;
	path_field: string;
	date_field: Date;
	key_value_object_field: object;
	[key: string]: unknown;
};

function fakeObject(): object | string {
	return {
		data1: faker.lorem.words(faker.number.int({ min: 1, max: 4 })),
		data2: faker.lorem.words(faker.number.int({ min: 1, max: 4 }))
	};
}

const baseTests: Array<Test> = Array(10)
	.fill(undefined)
	.map((): Test => {
		const date = faker.date.anytime();
		date.setHours(0, 0, 0);
		date.setUTCSeconds(0, 0);
		return {
			id: faker.string.uuid(),
			text_field: faker.music.songName(),
			textarea_field: faker.lorem.lines(2),
			checkbox_field: faker.datatype.boolean(),
			number_field: faker.number.int({ min: -10000, max: 10000 }),
			toggle_field: faker.datatype.boolean(),
			url_field: faker.internet.url(),
			path_field: faker.system.filePath().replace(/^\/[^/]+\//g, '/'),
			date_field: date,
			key_value_object_field: fakeObject() as object
		};
	});

export function getMemoryTests(): Array<Test> {
	//return [];
	//*
	if (typeof window === 'undefined') {
		return [];
	}

	let memory = window.localStorage.getItem('tests');
	if (memory === null || memory === undefined || memory === '') {
		memory = JSON.stringify(baseTests);
		window.localStorage.setItem('tests', memory);
	}

	return JSON.parse(memory).map((test: Test) => {
		test.date_field = new Date(test.date_field.toString());
		return test;
	});
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
